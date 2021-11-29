<template>
    <div class="h-screen bg-img " :style="{backgroundImage: `url(` + require(`~/assets/images/${cardsSection.image}`) + `)`}">
      <div class="text-center pt-40 sm:pt-20">
         <h4 class="font-bold text-3xl">
            {{ cardsSection.title }}
         </h4>
         <p class="text-xl text-gray-600 mb-6">
            {{ cardsSection.snippet }}
         </p>
         
      </div>
       <div class="mt-96 text-center">
        <NuxtLink class="text-white bg-black py-5 px-10 rounded-full" to="/contact">Contact Us</NuxtLink>
     </div>
    </div>
</template>

<script>
    export default {
        props: ['cardsSection']
    }
</script>

<style lang="css" scoped>
 .bg-img {
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;

 }
</style>