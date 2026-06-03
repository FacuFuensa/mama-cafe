import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, is_active, expires_at } = await request.json();

    if (!id || typeof is_active !== 'boolean') {
      return new Response(
        JSON.stringify({ success: false, error: 'Parámetros inválidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // When activating, deactivate every other promo first (only one active at a time).
    if (is_active) {
      await supabaseAdmin
        .from('promos')
        .update({ is_active: false })
        .eq('is_active', true)
        .neq('id', id);
    }

    // When activating, also set the (possibly new) expiration. Empty → no expiration.
    const updates: Record<string, unknown> = { is_active };
    if (is_active) {
      updates.expires_at = expires_at ? expires_at : null;
    }

    const { error } = await supabaseAdmin
      .from('promos')
      .update(updates)
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
