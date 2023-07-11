var count=1
export default defineNuxtRouteMiddleware(() => {
    if ((++count)%2 == 0) {
      console.log(`[來自 double-redirect 中間件] 重新導向至 /double`)
      return navigateTo('/double')
    }
  
    console.log(`[來自 double-redirect 中間件] 沒發生什麼特別的事情～`)
  })