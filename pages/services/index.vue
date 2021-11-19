<template>
  <div>
    <Nav/>
    <div v-if="service">
        <div class="h-screen bg-img table border-collapse w-full" :style="{backgroundImage: `url(` + require(`~/assets/images/${service.image}`) + `)`}">
          <div class="text-center pt-20">
             <h4 class="text-gray-700 font-bold text-3xl">
               {{ service.title }}
            </h4>
          </div>
          <div class="w-full text-center table-row align-bottom h-1/3">
             <p class="text-white font-bold text-lg px-4 sm:px-72 ">
               {{ service.snippet }}
             </p>
             <button class="text-white bg-black py-5 px-10 rounded-full mt-4">Make an appointment</button>
          </div>
        </div>
        <div class="bg-black text-white py-6">
            <div>
                  <video class="h-96 w-full sm:p-10 p-2 object-fill"
                    :src="require(`~/assets/videos/${service.video}`)" autoplay loop></video>
            </div>
            <div class="flex justify-center px-20">
            <table class="">
                <tr v-for="card in service.cards" :key="card.id" :card="card" class="border-b border-white"> 
                     <td class="p-1">{{card.title}}</td>
                     <td class="p-1" v-if="card.description != null"> {{card.description}}</td>
                      <td class="p-1" v-else> No description</td>
                     <td class="pl-8 py-1"> Starts from ${{card.price}}</td>
                </tr>
            </table>
            </div>
            <div v-for="card in service.cards" :key="card.id" :card="card">
              {{card.title}}
            </div>

        </div>
    </div>
    <div v-else >
        <h1>Not found</h1>
    </div>
   </div>
</template>

<script>
    export default {
       computed:{
           service(){
               return this.$store.getters.getServiceById(this.$route.params.id)
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