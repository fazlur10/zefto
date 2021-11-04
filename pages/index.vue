<template>
<div>
  <NavHome/>
    <LargeCardDisplay 
      v-for="cardInfo in largeCardInfo" 
      :key="cardInfo.id" 
      :cardsSection="cardInfo"
   />
</div>

</template>

<script>
import{ largeCardSections} from "@/assets/data.js"
import Nav from '~/components/NavHome.vue'
export default {
  components: { Nav },
     data(){
       return{
         largeCardInfo : largeCardSections,
       }
     }
  }
</script>
