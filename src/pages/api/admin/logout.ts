import type { APIRoute } from 'astro';

export const POST: APIRoute = ({ redirect }) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/admin/login',
      'Set-Cookie': 'admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
    },
  });
};
