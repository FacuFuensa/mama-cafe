import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const password = form.get('password');
  const expected = import.meta.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return redirect('/admin/login?error=1', 302);
  }

  const isProd = import.meta.env.PROD;
  const cookie = [
    `admin_session=${expected}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${7 * 24 * 60 * 60}`,
    ...(isProd ? ['Secure'] : []),
  ].join('; ');

  return new Response(null, {
    status: 302,
    headers: { Location: '/admin/events', 'Set-Cookie': cookie },
  });
};
