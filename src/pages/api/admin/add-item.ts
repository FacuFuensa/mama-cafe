import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase-admin';

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { category_id, name, description, price, optional, image_path } = await request.json();

    if (
      !category_id ||
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

    const { data: existing } = await supabaseAdmin
      .from('menu_items')
      .select('display_order')
      .eq('category_id', category_id)
      .order('display_order', { ascending: false })
      .limit(1);

    const nextOrder = existing && existing.length > 0 ? (existing[0].display_order ?? 0) + 1 : 0;

    const { data, error } = await supabaseAdmin
      .from('menu_items')
      .insert({
        category_id,
        slug: toSlug(name.trim()),
        name: name.trim(),
        description: typeof description === 'string' ? description.trim() : '',
        price: Math.round(price),
        optional: optional && typeof optional === 'string' ? optional.trim() || null : null,
        image_path: image_path && typeof image_path === 'string' ? image_path : null,
        display_order: nextOrder,
        is_active: true,
      })
      .select()
      .single();

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, item: data }), {
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
