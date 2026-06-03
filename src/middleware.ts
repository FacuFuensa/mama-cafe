import { defineMiddleware } from 'astro:middleware';

const PROTECTED = /^\/(admin|api\/admin)\//;
const EXCLUDED = new Set(['/admin/login', '/api/admin/auth']);

export const onRequest = defineMiddleware(({ url, cookies, redirect }, next) => {
  if (!PROTECTED.test(url.pathname) || EXCLUDED.has(url.pathname)) {
    return next();
  }

  const session = cookies.get('admin_session');
  const expected = import.meta.env.ADMIN_PASSWORD;

  if (!session?.value || session.value !== expected) {
    return redirect('/admin/login', 302);
  }

  return next();
});
