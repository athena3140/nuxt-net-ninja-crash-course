<template>
   <div>
      <Head>
         <Title>Nuxt Dojo | {{ product.title }}</Title>
         <Meta name="description" :content="product.description" />
      </Head>
      <ProductDetails :product="product" />
   </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const {data:product} = await useFetch(uri, {key: id})

if(!product.value) {
   throw createError({statusCode: 404, message:'Product Not Found.', fatal:true})
}

definePageMeta({
   layout: 'product'
})
</script>

<style scoped>

</style>