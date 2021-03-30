addEventListener('fetch', (event: FetchEvent) => {
  const dt = new Date().toLocaleString('ja-JP');
  const response = new Response(`<html><p><< ただいまの時刻は${dt} >> 🐓</p><p>GitHub: <a href="https://github.com/kecbigmt/deno-deploy-helloworld">https://github.com/kecbigmt/deno-deploy-helloworld</a></p></html>`, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  });
  event.respondWith(response);
});
