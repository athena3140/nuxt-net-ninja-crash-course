<template>
   <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi tenetur quia dolor iusto cum, ab consectetur possimus nisi tempore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi tenetur quia dolor iusto cum, ab consectetur possimus nisi tempore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi tenetur quia dolor iusto cum, ab consectetur possimus nisi tempore.</p>
      <div>{{ data }}</div>
   </div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=mario', {
//    method: 'post',
//    body: {
//       age: 30
//    }
// });
// console.log(data)
// const { data } = await useFetch('api/ninja');

const{data}= await useFetch('api/currency/MMK')
</script>

<style scoped>
h2 {
   font-size: 36px;
   margin-bottom: 20px;
}

p {
   margin: 20px 0;
}
</style>