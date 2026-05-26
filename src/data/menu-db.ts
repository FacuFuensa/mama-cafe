import { supabase } from '../lib/supabase';
import type { MenuItem, MenuSection } from './menu';

export async function fetchMenu(): Promise<MenuSection[] | null> {
  try {
    const [{ data: categories, error: catError }, { data: items, error: itemError }] =
      await Promise.all([
        supabase
          .from('categories')
          .select('id, name')
          .eq('is_active', true)
          .order('display_order'),
        supabase
          .from('menu_items')
          .select('id, category_id, name, description, price, tags, optional, image_path, composition')
          .eq('is_active', true)
          .order('display_order'),
      ]);

    if (catError) throw catError;
    if (itemError) throw itemError;
    if (!categories || !items) return null;

    return categories.map((cat) => ({
      category: cat.name as string,
      items: items
        .filter((item) => item.category_id === cat.id)
        .map((item) => ({
          id: item.id as string,
          name: item.name as string,
          description: item.description as string,
          price: item.price as number,
          tags: item.tags as string[] | undefined,
          optional: item.optional as string | undefined,
          image: item.image_path as string | undefined,
          composition: item.composition as MenuItem['composition'],
        })),
    }));
  } catch (err) {
    console.error('[menu-db] fetchMenu failed:', err);
    return null;
  }
}
