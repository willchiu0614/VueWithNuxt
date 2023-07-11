export default defineEventHandler((event) => {
    const { id } = event.context.params
    return `Hello, ${id}!`
  })