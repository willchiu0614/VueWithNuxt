<template>
    <div class="m-1 bg-white  border-2 border-black">
      <p>content</p>
      <div class="flex flex-col items-center">
        <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
        <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
        <NuxtLink to="/counter">前往 Counter</NuxtLink>
      </div>
    </div>
  </template>
 <script setup>
 definePageMeta({
   middleware: 'redirect'
 })
 const runtimeConfig = useRuntimeConfig()
 const {apiBase}=runtimeConfig.public
 console.log(toRaw(runtimeConfig))
 const {data}=await useFetch(`${apiBase}/hello`)
 </script>