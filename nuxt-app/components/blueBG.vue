<template>
    <div class="m-4 bg-blue-200 h-full border-2 border-blue-600">
        <NuxtLayout class="m-5 border-2 border-blue-500">
            <template #header>
                <p>全局-header</p>
            </template>
            <NuxtPage />

        </NuxtLayout>
    </div>
</template>