<template>
    <div class="flex flex-col items-center">
        <div class="mt-2 w-2/3 border-2 border-black flex flex-col  items-center">
            <NuxtLink to="/counter">>>前往 Counter</NuxtLink>
            <p class="text-4 text-sky-600">狀態管理練習</p>
            <span class="mt-2 text-2 font-semibold text-gray-700">{{ data2 }}</span>
        </div>
    </div>
</template>
  
<script setup>
const data2 = useRandom()
</script>