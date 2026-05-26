import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File | null;
    const title = formData.get('title') as string | null;
    const isActive = formData.get('is_active') !== 'false'; // defaults true

    if (!image || !title) {
      return new Response(
        JSON.stringify({ success: false, error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const ext = image.name.split('.').pop() ?? 'jpg';
    const filename = `event-${Date.now()}.${ext}`;
    const buffer = new Uint8Array(await image.arrayBuffer());

    // Remove all existing images from bucket
    const { data: existing } = await supabaseAdmin.storage.from('events').list();
    if (existing?.length) {
      await supabaseAdmin.storage.from('events').remove(existing.map(f => f.name));
    }

    // Upload new image
    const { error: uploadError } = await supabaseAdmin.storage
      .from('events')
      .upload(filename, buffer, { contentType: image.type });

    if (uploadError) {
      return new Response(
        JSON.stringify({ success: false, error: uploadError.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: urlData } = supabaseAdmin.storage.from('events').getPublicUrl(filename);

    // Deactivate all existing events
    await supabaseAdmin.from('events').update({ is_active: false }).eq('is_active', true);

    // Insert new event row
    const { data: event, error: insertError } = await supabaseAdmin
      .from('events')
      .insert({ title, image_path: urlData.publicUrl, is_active: isActive })
      .select()
      .single();

    if (insertError) {
      return new Response(
        JSON.stringify({ success: false, error: insertError.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, event }), {
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
