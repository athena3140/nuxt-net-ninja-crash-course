<template>
   <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col items-center">
         <h1 class="text-7xl font-bold">{{error.statusCode}}</h1>
         <p class="text-4xl font-light my-3">{{error.message}}</p>
         <button class="btn" @click="handleClickError">Go Home</button>
      </div>
   </div>
</template>

<script setup>
defineProps(['error'])

const handleClickError = () => clearError({redirect:'/'})
</script>

<style scoped>
</style>