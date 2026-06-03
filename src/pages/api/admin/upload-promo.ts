import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File | null;
    const title = formData.get('title') as string | null;
    const expiresAt = (formData.get('expires_at') as string | null)?.trim() || null;

    if (!image || !title) {
      return new Response(
        JSON.stringify({ success: false, error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Only allow real image types; derive the extension from the validated
    // MIME rather than trusting the user-supplied filename.
    const ALLOWED: Record<string, string> = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp',
      'image/gif': 'gif',
    };
    const ext = ALLOWED[image.type];
    if (!ext) {
      return new Response(
        JSON.stringify({ success: false, error: 'Formato de imagen no permitido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const filename = `promo-${Date.now()}.${ext}`;
    const buffer = new Uint8Array(await image.arrayBuffer());

    // Upload new image — old images are kept for history (no removal).
    const { error: uploadError } = await supabaseAdmin.storage
      .from('promos')
      .upload(filename, buffer, { contentType: image.type });

    if (uploadError) {
      return new Response(
        JSON.stringify({ success: false, error: uploadError.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: urlData } = supabaseAdmin.storage.from('promos').getPublicUrl(filename);

    // Deactivate all existing promos (only one active at a time)
    await supabaseAdmin.from('promos').update({ is_active: false }).eq('is_active', true);

    // Insert new promo row, active
    const { data: promo, error: insertError } = await supabaseAdmin
      .from('promos')
      .insert({ title, image_path: urlData.publicUrl, is_active: true, expires_at: expiresAt })
      .select()
      .single();

    if (insertError) {
      return new Response(
        JSON.stringify({ success: false, error: insertError.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, promo }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido';
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
