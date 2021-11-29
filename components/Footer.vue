<template>
    <div class="text-center pt-10">
        <div class="flex justify-center" >
         <NuxtLink to="/"> <img width="75" height="75" :src="require(`~/assets/images/logo.webp`)" ></NuxtLink>
        </div>
        <div>
         <NuxtLink to="/"> <h1 class="text-2xl font-bold">Zefto Solutions</h1></NuxtLink>
        </div>
        <div class="flex justify-center space-x-4 sm:space-x-20 mt-4">
         <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/fb.webp`)" ></a>
         <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/insta.webp`)" ></a>
         <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/linkedin.webp`)" ></a>
        </div>
        <div class="sm:flex sm:justify-center sm:space-x-8 mt-4">
            <span class="text-base text-gray-600">
              <NuxtLink to="/contact">Contact</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink to="/appointment">Appointment</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${1}`">Web</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${2}`">Branding</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${3}`">RPA</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${4}`">Digital Marketing</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${5}`">Software</NuxtLink>
            </span>
            <span class="text-base text-gray-600">
              <NuxtLink :to="`/services/${6}`">Mobile App</NuxtLink>
            </span>
        </div>
        <div>
            <span class="text-base text-gray-600 mt-4">
              <NuxtLink to="/">&copy; 2021 Zefto Solutions All rights reserved</NuxtLink>
            </span>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

</style>