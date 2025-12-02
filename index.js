addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 获取请求的URL
  const url = new URL(request.url)

  // 简单的路由示例
  if (url.pathname === '/hello') {
    return new Response('Hello from Cloudflare Workers!', {
      headers: { 'content-type': 'text/plain' }
    })
  }

  // 默认响应
  return new Response('Welcome to Cloudflare Workers', {
    headers: { 'content-type': 'text/plain' }
  })
}
