<template>
   <div>
      <div class="grid grid-cols-4 gap-5">
         <div v-for="p in products">
            <ProductCard :product="p" />
         </div>
      </div>
   </div>
</template>

<script setup>
definePageMeta({
   layout: 'product'
})

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
useHead({
   title: "Products",
   link: [
      {
         rel: "icon",
         href: "https://www.youtube.com/s/desktop/92fdfad2/img/favicon_32x32.png",
      },
   ],
})
</script>

<style  scoped>

</style>
