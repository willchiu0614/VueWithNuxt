<template>
  <div class="bg-white py-2">
    <div class="flex flex-col items-center">
      <h1 class="text-4 text-gray-800">這是 catch-all/... 下的頁面</h1>
      <p class="mt-2 text-3 text-gray-600">匹配到的 Params:</p>
      <p class="my-2 text-5 font-semibold text-violet-500">{{ id }}</p>
      <span class="text-l text-gray-400">每個陣列元素對應一個層級</span>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const { id } = route.params
</script>