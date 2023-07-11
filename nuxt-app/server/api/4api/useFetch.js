var agevalue=29
export default defineEventHandler((event) => {
  return {
    name: 'Heng',
    gender: 'man',
    age:agevalue++,
    mail:'heng@gmail.com'
  }
})