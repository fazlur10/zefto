<template>
    <div>
        <NavInner/>
        <div class="bg-img-appointment" :style="{backgroundImage: `url(` + require(`~/assets/images/bg_contact.webp`) + `)`}">
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
               
               <fg-input>
                  <el-date-picker v-model="datePicker"
                    class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    type="date"
                    placeholder="Pick a day"
                    :picker-options="pickerOptions1">
                 </el-date-picker>
               </fg-input>
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
      pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
      },
      datePicker: '',
      timePicker: ''
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      
      if (this.datePicker != '' && this.datePicker != ''){
      this.$axios
        .post("https://zefto.herokuapp.com/appointments", {
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
    }
    else{
       this.$axios
        .post("", {
        }).then(response => {
          this.errored ='Select a date and time'
        })
        .finally(() => {
          this.loading = false
        });
    }
    },
  }
};
    
</script>

<style lang="css">
.bg-img-appointment {
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        height: 30vh;
 }
.el-picker-panel__body-wrapper, .el-picker-panel.time-select.el-popper{
   background-color: #fff;
   padding: 20px;
   border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
}
.el-date-picker__header{
  text-align: center;
  font-size: 20px;
}
.el-date-picker__header:hover {
  background-color: #D8D8D8;
}
body > div.el-picker-panel.el-date-picker.el-popper > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(1){
  color:#a3a3a3;
  text-align: center;
}
body > div.el-picker-panel.el-date-picker.el-popper > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(1) > th, td{
  padding: 5px !important;
  text-align: center;
}
td:hover{
 background-color: #000;
 color: #fff;
 cursor: pointer;
}
td.disabled:hover{
 background-color: red;
 color: #fff;
 cursor: not-allowed;
}
.el-scrollbar {
  padding-bottom:20px;
  padding-right: 20px;
}
.time-select-item{
  padding-bottom: 5px;
  padding-left:5px;
}
.time-select-item:hover{
  color: #fff;
  background-color: #000;
  cursor: pointer;
}

</style>
