<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
      <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
  })
})
</script>