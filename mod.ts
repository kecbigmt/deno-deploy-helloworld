addEventListener('fetch', (event: FetchEvent) => {
  const dt = new Date().toLocaleString('ja-JP');
  const response = new Response(`ただいまの時刻は${dt}。こちらのソースコードでお届けしています👉 https://github.com/kecbigmt/deno-deploy-helloworld`, {
    headers: { 'content-type': 'text/plain;charset=UTF-8' },
  });
  event.respondWith(response);
});
