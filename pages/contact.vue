<template>
    <div>
        <NavInner/>
        <div class="bg-img " :style="{backgroundImage: `url(` + require(`~/assets/images/bg_contact.webp`) + `)`}">
        </div>
        <div class="mx-4 md:mx-16 grid grid-cols-1 md:grid-cols-4 gap-4 my-4 text-center md:text-left">
            <div class="bg-white rounded-3xl  shadow-md p-6 md:p-8 lg:px-12">
                <div class="flex justify-center md:justify-start">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                   </svg>
                   <h3 class="px-4 text-base font-bold">Address</h3>
                </div>
                <div class="pt-2 text-sm text-gray-500">
                    <p>No 35, Baduriya road</p>
                    <p>Mawanella</p>
                    <p>Sri Lanka</p>
                </div>
            </div>
           <div class="bg-white rounded-3xl shadow-md p-6 md:p-8 lg:px-12">
                <div class="flex justify-center md:justify-start">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
                   </svg>
                   <h3 class="px-4 text-base font-bold">Email</h3>
                </div>
                <div class="pt-2 text-sm text-gray-500">
                    <p>info@zefto.lk</p>
                    <p>support@zefto.lk</p>
                </div>
            </div>
            
            <div class="bg-white rounded-3xl shadow-md p-6 md:p-8 lg:px-12">
                <div class="flex justify-center md:justify-start">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                   <h3 class="px-4 text-base font-bold">Phone</h3>
                </div>
                <div class="pt-2 text-sm text-gray-500">
                    <p>+94 77 0699 871</p>
                    <p>+94 75 760 9896</p>
                    <p>+94 76 365 7277</p>
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-md p-6 md:p-8 lg:px-12">
                <div class="flex justify-center md:justify-start">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                    </svg>
                   <h3 class="px-4 text-base font-bold">Whatssapp</h3>
                </div>
                <div class="pt-2 text-sm text-gray-500">
                    <p>+94 77 0089 800</p>
                    <p>+94 75 760 9896</p>
                    <p>+94 76 365 7277</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="md:pl-12">
                <div>
   <!-- This shows a success message if the form was submitted correctly. -->
    <div v-if="success" class="rounded bg-gray-700 text-white text-lg p-4">
      Great! Your message has been sent successfully. We will try to respond
      quickly.
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
        <label for="message" class="sr-only">Message</label>
        <div class="rounded-md shadow-sm">
          <textarea required v-model="message" name="message" id="message" rows="4" class="form-input block w-full py-2 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message*" ></textarea>
        </div>
      </div>
      <div class="text-center md:text-right">
        <span class="inline-flex rounded-md shadow-sm">
          <button type="submit" class="inline-flex justify-center py-2 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-black active:bg-gray-800 transition duration-150 ease-in-out">
            {{ loading ? "Sending Message..." : "Submit" }}
          </button>
        </span>
      </div>
    </form>
  </div>
            </div>
            <div class="text-right md:pr-12">
                         <iframe id="gmap_canvas" class="w-full" height="375" src="https://maps.google.com/maps?q=zefto%20solutions,%20mawanella&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                         </iframe>
                         <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                    
                </div>
            </div>
            <FooterOther/>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .post("https://zefto.herokuapp.com/inquiries", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
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
