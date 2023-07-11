<template>
    <div class="ml-1 flex flex-col items-start">
        <div class="mt-1 flex flex-row">
            <div class="h-36 border-2 border-black flex flex-col  items-center">
                <p class="text-4 text-sky-600">組合式 API練習</p>
                <span class="mt-1 text-2 text-gray-700">{{ count }}</span>
                <button
                    class="my-1 rounded-sm bg-sky-600 py-1 px-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    @click="increment">
                    增加 1
                </button>
            </div>
            <div class="ml-1  h-36  border-2 border-black flex flex-col  items-center">
                <p class="text-4 text-sky-600">useAsyncData練習</p>
                <span class="mt-1 text-2 font-semibold text-gray-700">{{ data }}</span>
            </div>
            <div class="ml-1  h-36  border-2 border-black flex flex-col  items-center">
                <p class="text-4 text-sky-600">狀態管理練習</p>
                <span class="mt-1 text-2 font-semibold text-gray-700">{{ data2 }}</span>
                <div class="my-1 flex flex-row">
                    <button
                        class=" rounded-sm bg-sky-600 py-1 px-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        @click="data2++">
                        加1
                    </button>
                    <button
                        class="mx-1 rounded-sm bg-sky-600 py-1 px-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        @click="data2--">
                        減1
                    </button>
                </div>
                <NuxtLink to="/random">>>前往 Random</NuxtLink>
            </div>
            <div class="ml-1  h-36  border-2 border-black flex flex-col  items-center">
                <p class="text-4 text-sky-600">Pinia 的 Store練習</p>
                <span class="mt-1 text-2 font-semibold text-gray-700">{{ counterStore.data3 }}</span>
                <div class="my-1 flex flex-row">
                    <button
                        class=" rounded-sm bg-sky-600 py-1 px-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        @click="counterStore.increment">
                        加1
                    </button>
                    <button
                        class="mx-1 rounded-sm bg-sky-600 py-1 px-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        @click="counterStore.decrement">
                        減1
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useCounterStore } from '@/stores/counter'
const { count, increment } = useCounter()
const { data } = await useAsyncData(() => $fetch('/api/4api/add'))
const data2 = useState('data2', () => 0)
const counterStore = useCounterStore()
</script>