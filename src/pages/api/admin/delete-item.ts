import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id || typeof id !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'Parámetros inválidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: item } = await supabaseAdmin
      .from('menu_items')
      .select('image_path')
      .eq('id', id)
      .single();

    if (item?.image_path?.includes('supabase')) {
      const filename = item.image_path.split('/').pop();
      if (filename) {
        await supabaseAdmin.storage.from('menu-images').remove([filename]);
      }
    }

    const { error } = await supabaseAdmin
      .from('menu_items')
      .delete()
      .eq('id', id);

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
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
