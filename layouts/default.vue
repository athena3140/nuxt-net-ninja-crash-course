<template>
     <NuxtLoadingIndicator />
   <header class="shadow-lg bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
         <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
         <ul class="flex gap-4">
            <li> <NuxtLink to="/">Home</NuxtLink> </li>
            <li> <NuxtLink to="/about">About</NuxtLink> </li>
            <li> <NuxtLink to="/products" class="btn">Products</NuxtLink> </li>
            <!-- <li> <NuxtLink to="/products/dedede" class="btn">Products deee</NuxtLink> </li> -->
         </ul>
      </nav>
   </header>

   <div class="container p-4"> 
      <slot />
   </div>
</template>

<style>
.router-link-exact-active {
   color: #12b488
}
</style>