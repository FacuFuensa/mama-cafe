import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { updates } = await request.json();

    if (!Array.isArray(updates) || updates.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'Parámetros inválidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    for (const item of updates) {
      if (
        typeof item.id !== 'string' ||
        typeof item.price !== 'number' ||
        item.price < 0 ||
        !Number.isFinite(item.price)
      ) {
        return new Response(
          JSON.stringify({ success: false, error: 'Datos inválidos en la lista' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const now = new Date().toISOString();
    const results = await Promise.all(
      updates.map(({ id, price }: { id: string; price: number }) =>
        supabaseAdmin
          .from('menu_items')
          .update({ price: Math.round(price), updated_at: now })
          .eq('id', id)
      )
    );

    const firstError = results.find((r) => r.error);
    if (firstError?.error) {
      return new Response(
        JSON.stringify({ success: false, error: firstError.error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, count: updates.length }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido';
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
