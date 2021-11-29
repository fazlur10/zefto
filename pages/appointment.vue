<template>
    <div>
        <NavInner/>
        <div class="bg-img " :style="{backgroundImage: `url(` + require(`~/assets/images/bg_contact.webp`) + `)`}">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="md:pl-12">
                <div>
   <!-- This shows a success message if the form was submitted correctly. -->
    <div v-if="success" class="rounded bg-gray-700 text-white text-lg p-4">
      Great! Your booking has been made successfully. We will contact you
      soon.
    </div>
    <form v-else v-on:submit.prevent="sendMessage" class="grid grid-cols-1 gap-y-6">
      <!-- Here an error is displayed if something goes wrong -->
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        {{errored}}
      </div>
      <div>
        <label for="full_name" class="sr-only">Full name*</label>
        <div class="rounded-md shadow-sm">
          <input v-model="name" required name="name" id="full_name" class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Full name*" />
        </div>
      </div>
      <div>
        <label for="email" class="sr-only">Email*</label>
        <div class=" rounded-md shadow-sm">
          <input required v-model="email" name="email" id="email" type="email" class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Email*" />
        </div>
      </div>
      <div>
        <label for="phone" class="sr-only">Phone</label>
        <div class="rounded-md shadow-sm">
          <input v-model="phone" name="phone" id="phone" class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Phone" />
        </div>
      </div>
      <div>
        <label for="Appointment" class="sr-only">Appointment Date and Time</label>
           <div class="Appointment grid grid-cols-1 md:grid-cols-2 gap-4">
             <div class="rounded-md shadow-sm">
               <el-date-picker lang="en" v-model="datePicker"
                    type="date"
                    placeholder="Pick a day" 
                    class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150">
                </el-date-picker>
             </div>
             <div class="rounded-md shadow-sm">
               <el-time-select
                   v-model="timePicker"
                   :picker-options="{
                   start: '09:00',
                   step: '00:45',
                   end: '16:00'
                     }"
                   placeholder="Select time"
                   class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150">
               </el-time-select>
             </div>
           </div>
      </div>
      <div class="text-center md:text-right">
        <span class="inline-flex rounded-md shadow-sm">
          <button type="submit" class="inline-flex justify-center py-2 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-black active:bg-gray-800 transition duration-150 ease-in-out">
            {{ loading ? "Booking....." : "Book an Appointment" }}
          </button>
        </span>
      </div>
    </form>
  </div>
            </div>
            <div class="text-right md:pr-12">
                        <img class="w-full" height="375" :src="require(`~/assets/images/appointment_bg.webp`)" >
                    
                </div>
            </div>
     <FooterOther/>
    </div>
</template>

<script>
    import {DatePicker, TimeSelect} from 'element-ui'
    export default {
      components: {
        [DatePicker.name]: DatePicker,
        [TimeSelect.name]: TimeSelect
      },
        data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      datePicker: '',
      timePicker: ''
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .post("http://localhost:1337/appointments", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          date: this.datePicker,
          time: this.timePicker
        }).then(response => {
          this.success = true
          this.errored =false
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    },
  }
};
    
</script>

<style lang="css" scoped>
.bg-img {
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        height: 30vh;
 }
</style>