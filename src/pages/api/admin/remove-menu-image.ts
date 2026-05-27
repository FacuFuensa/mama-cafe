import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, image_path } = await request.json();

    if (!id || typeof id !== 'string' || !image_path || typeof image_path !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'Parámetros inválidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (image_path.includes('supabase')) {
      const filename = image_path.split('/').pop();
      if (filename) {
        await supabaseAdmin.storage.from('menu-images').remove([filename]);
      }
    }

    const { error } = await supabaseAdmin
      .from('menu_items')
      .update({ image_path: null, updated_at: new Date().toISOString() })
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
