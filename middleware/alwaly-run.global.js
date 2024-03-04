export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`[全域中間件] to: ${to.path}, from: ${from.path}`)
})
//全部頁面都會出現