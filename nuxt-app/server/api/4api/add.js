let num = 0
export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // 等待 2 秒

  num += 1

  return JSON.stringify(num)
})