<template>
  <div class="fixed w-full ">
     <div class="text-center bg-gray-100 p-2">
        <span class="border-b border-gray-600 hover:border-gray-900">
         <NuxtLink to="/">Read Zefto Solution's future plans</NuxtLink>
        </span>
     </div>
     <div class="bg-transparent ">
     <div class="flex justify-between items-center px-1 sm:px-5">
           <NuxtLink class="text-xl sm:text-2xl font-bold" to="/">Zefto Solutions</NuxtLink>
         <div id="mySidenav" class="sidenav">
             <a href="javascript:void(0)" class="closebtn text-white" v-on:click="closeNav()">&times;</a>
             <NuxtLink :to="`/services/${1}`" class="link">Web</NuxtLink>
             <NuxtLink :to="`/services/${2}`" class="link">Branding</NuxtLink>
             <NuxtLink :to="`/services/${3}`" class="link">RPA</NuxtLink>
             <NuxtLink :to="`/services/${4}`" class="link">Digital Marketing</NuxtLink>
             <NuxtLink :to="`/services/${5}`" class="link">Software</NuxtLink>
             <NuxtLink :to="`/services/${6}`" class="link">Mobile App</NuxtLink>
          </div>
         <div>
             <button class="text-lg font-bold" v-on:click="openNav()">Menu</button>
         </div>
       </div>
       
     </div>
     <div class="mt-96 text-center">
        <NuxtLink class="text-white bg-black py-5 px-10 rounded-full" to="/contact">Custom Order</NuxtLink>
     </div>
 </div>
    
</template>

<script>
    export default {
        methods: {
          openNav: function() {
             document.getElementById("mySidenav").style.width = "250px";
            },
          closeNav: function () {
              document.getElementById("mySidenav").style.width = "0";
            }
        }
    }
</script>

<style lang="css" scoped>
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.link:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}



</style>