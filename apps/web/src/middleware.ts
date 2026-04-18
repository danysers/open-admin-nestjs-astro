import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (!pathname.startsWith('/api/')) {
    return next();
  }

  const apiBase = import.meta.env.PUBLIC_API_URL;

  if (!apiBase) {
    return new Response(JSON.stringify({ message: 'PUBLIC_API_URL is not configured' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const targetUrl = `${apiBase.replace(/\/$/, '')}${pathname}${search}`;
  const headers = new Headers(context.request.headers);
  headers.delete('host');

  const init: RequestInit = {
    method: context.request.method,
    headers,
    redirect: 'manual',
  };

  if (context.request.method !== 'GET' && context.request.method !== 'HEAD') {
    init.body = await context.request.arrayBuffer();
  }

  const response = await fetch(targetUrl, init);
  const responseHeaders = new Headers(response.headers);
  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
});
