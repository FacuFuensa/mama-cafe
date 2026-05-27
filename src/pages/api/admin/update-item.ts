import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, name, description, price, optional } = await request.json();

    if (
      !id ||
      typeof name !== 'string' ||
      !name.trim() ||
      typeof price !== 'number' ||
      price < 0 ||
      !Number.isFinite(price)
    ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Parámetros inválidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await supabaseAdmin
      .from('menu_items')
      .update({
        name: name.trim(),
        description: typeof description === 'string' ? description.trim() : '',
        price: Math.round(price),
        optional: optional && typeof optional === 'string' ? optional.trim() || null : null,
        updated_at: new Date().toISOString(),
      })
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
