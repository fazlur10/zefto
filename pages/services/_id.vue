<template>
<div>
  <Nav/>
    <div v-if="service">
     <div v-for="image in service.image" :key="image.id">
          <div  class="h-screen bg-img table border-collapse w-full" :style="{ backgroundImage: 'url('+'https://zefto.herokuapp.com' + image.url + ')' }">
           <div class="text-center pt-20">
             <h4 class="text-gray-600 font-bold text-3xl">
               {{ service.title }}
            </h4>
          </div>
          <div class="w-full text-center table-row sm:align-bottom sm:h-1/3">
             <p class="text-white font-bold text-lg px-4 sm:px-72 mb-8">
               {{ service.snippet }}
             </p>
              <NuxtLink class="text-white bg-black py-5 px-10 rounded-full " to="/appointment">Make an appointment</NuxtLink>
          </div>
          </div>
           
           <div class="bg-black text-white py-6">
             <div v-for="video in service.video" :key="video.id">
               <div>
                  <video class="h-96 w-full sm:p-10 p-2 object-fill"
                    :src="'https://zefto.herokuapp.com'+video.url" autoplay loop></video>
              </div>
            </div>


            <div v-for="card in service.cards" :key="card.id" :card="card" class="mx-4 text-white md:mx-16 grid grid-cols-1 md:grid-cols-4 gap-4 my-4 text-center md:text-left">
                
                 <div v-for="image in card.image" :key="image.id" class="md:col-span-1">
                        <img  :src="'https://zefto.herokuapp.com'+image.url" class="rounded-2xl">
                 </div>
                 <div v-if="card.image.length==0">
                      <img  :src="require(`~/assets/images/fe1.webp`)" class="rounded-2xl">
                 </div>
                 
                <div class="text-white p-2  lg:px-12 md:col-span-3">
                  <h1 class="text-xl my-2">{{card.title}} </h1>
                  <p class="text-sm mb-2" v-if="card.description != null">{{card.description}} </p>
                  <p class="text-sm mb-2" v-else>No available description, Contact us to know more </p>
                   <h2 class="text-xl" v-if="card.price != null"> Starts from ${{card.price}}</h2>
                   <h2 class="text-xl" v-else> </h2>
                </div>
            </div>

<FooterInner/>
           </div>
           
     </div>
    </div>
    <div v-else >
        <h1>Not found</h1>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      service: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('https://zefto.herokuapp.com/services/'+this.$route.params.id)

      this.service = response.data
    } catch (error) {
      this.error = error;
    }
  }
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
