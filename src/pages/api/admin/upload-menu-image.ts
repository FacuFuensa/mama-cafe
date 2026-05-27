import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File | null;
    const itemId = formData.get('item_id') as string | null;

    if (!image) {
      return new Response(
        JSON.stringify({ success: false, error: 'Falta la imagen' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const filename = `menu-${Date.now()}.jpg`;
    const buffer = new Uint8Array(await image.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from('menu-images')
      .upload(filename, buffer, { contentType: 'image/jpeg' });

    if (uploadError) {
      return new Response(
        JSON.stringify({ success: false, error: uploadError.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: urlData } = supabaseAdmin.storage.from('menu-images').getPublicUrl(filename);
    const url = urlData.publicUrl;

    if (itemId) {
      const { error: updateError } = await supabaseAdmin
        .from('menu_items')
        .update({ image_path: url, updated_at: new Date().toISOString() })
        .eq('id', itemId);

      if (updateError) {
        return new Response(
          JSON.stringify({ success: false, error: updateError.message }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response(JSON.stringify({ success: true, url }), {
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
