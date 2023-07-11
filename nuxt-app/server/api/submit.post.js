export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body.my_tst_data)
    return {
      ok: true,
      data: body,
      meaasge: 'my_test_data is: '+body.my_tst_data
    }
  })