<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Name</label>
    <input id="name" v-model="modifiedData.name" type="text" name="name">

    <label for="email">Email</label>
    <input id="email" v-model="modifiedData.email" type="text" name="email">

    <label for="phone">phone</label>
    <input id="phone" v-model="modifiedData.phone" type="text" name="phone">

    <label for="message">Message</label>
    <input id="message" v-model="modifiedData.message" type="text" name="message">

    <input type="submit" value="Submit">
  </form>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      modifiedData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      error: null
    }
  },
  
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:1337/inquiries', this.modifiedData)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>
