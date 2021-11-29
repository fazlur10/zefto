<template>
   <div class="py-10 text-gray-700 bg-gray-300">
         <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
             <div class="pl-4 sm:pl-12">
                 <div class="flex justify-center sm:justify-start">
                     <NuxtLink to="/"><img width="75" height="75" :src="require(`~/assets/images/logo.webp`)" ></NuxtLink>
                </div>
                <div>
                   <NuxtLink to="/"><h1 class="text-2xl font-bold text-center sm:text-left">Zefto Solutions</h1></NuxtLink>
                </div>
                <div class="flex justify-center sm:justify-start  space-x-4 mt-4">
                   <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/fb.webp`)" ></a>
                   <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/insta.webp`)" ></a>
                   <a href="https://www.facebook.com/"> <img width="25" height="25" :src="require(`~/assets/images/linkedin.webp`)" ></a>
                </div>
             </div>
             <div class="text-center sm:text-left">
                 <div class="text-base mt-4">
                    <div class="flex justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <h3 class="px-4 text-base font-bold">Address</h3>
                    </div>
                    <p>No 35 Baduriya School rd, Mawanella, SriLanka 71500</p>
                 </div>
                 <div class="text-base mt-4">
                   <div class="flex justify-center md:justify-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <h3 class="px-4 text-base font-bold">Phone</h3>
                   </div>
                   <div>
                       <p>+94 77 008 9800</p>
                       <p>+94 75 760 9896</p>
                   </div>
                   
                 </div>
             </div>
             <div class="text-center sm:text-left mt-4">
                     <div class="text-base">
                         <NuxtLink :to="`/services/${1}`">Web</NuxtLink>
                      </div>
                     <div class="text-base">
                         <NuxtLink :to="`/services/${2}`">Branding</NuxtLink>
                      </div>
                    <div class="text-base">
                         <NuxtLink :to="`/services/${3}`">RPA</NuxtLink>
                     </div>
                      <div class="text-base">
                         <NuxtLink :to="`/services/${4}`">Digital Marketing</NuxtLink>
                     </div>
                      <div class="text-base">
                         <NuxtLink :to="`/services/${5}`">Software</NuxtLink>
                     </div>
                      <div class="text-base">
                         <NuxtLink :to="`/services/${6}`">Mobile App</NuxtLink>
                     </div>
              </div>
              <div class="text-center sm:text-left mt-4">
                  <div class="text-base">
                         <NuxtLink to="/contact">Contact</NuxtLink>
                      </div>
                      <div class="text-base">
                         <NuxtLink to="/appointment">Appointment</NuxtLink>
                      </div>
                      <div class="">
                   <div class="flex justify-center md:justify-start mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
                   </svg>
                      <h3 class="pl-4 text-base font-bold">support</h3>
                   </div>
                   <div>
                       <p>info@zefto.lk</p>
                    <p>support@zefto.lk</p>
                   </div>
                   
                 </div>
              </div>
         </div>

    </div >
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

</style>