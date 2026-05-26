import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: 'ID requerido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: event, error: fetchError } = await supabaseAdmin
      .from('events')
      .select('image_path')
      .eq('id', id)
      .single();

    if (fetchError || !event) {
      return new Response(
        JSON.stringify({ success: false, error: 'Evento no encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract filename from public URL and remove from storage
    const storagePath = (event.image_path as string)
      .split('/storage/v1/object/public/events/')[1];
    if (storagePath) {
      await supabaseAdmin.storage.from('events').remove([storagePath]);
    }

    const { error: deleteError } = await supabaseAdmin
      .from('events')
      .delete()
      .eq('id', id);

    if (deleteError) {
      return new Response(
        JSON.stringify({ success: false, error: deleteError.message }),
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
