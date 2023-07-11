<template>
  <div class="m-1 bg-white  border-2 border-black">
    <p>content</p>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
      <p class="my-2 text-2xl text-gray-600">這裡是 /contact</p>
      <p class="text-2xl text-gray-600">
      請求狀態:
      {{ pending ? '請求中' : '完成' }}
    </p>
      <p class="text-4xl text-blue-300">data</p>
      <span class="mt-4 text-6 font-semibold text-sky-400"> {{data}}</span>
      <button
        class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        @click="refresh">
        獲取資料
      </button>
      <NuxtLink to="/">前往 首頁</NuxtLink>
    </div>
  </div>
</template> 
<script setup>
  const { data, pending, error, refresh }  = await useFetch('/api/4api/useFetch', {
    pick: ['name', 'age']
  })
  console.log(data)


</script>