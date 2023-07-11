const runtimeConfig = useRuntimeConfig()
export default defineEventHandler((event)=>{
    const {token}=runtimeConfig
    console.log(`環境變數 token value:${token}`)
    return {ok:true}
})