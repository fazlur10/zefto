<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="inquiry in inquiries" :key="inquiry.id">
          <p> {{ inquiry.name }}</p>
          <p> {{ inquiry.email }}</p>
       <p> {{ inquiry.phone }}</p>
       <p> {{ inquiry.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      inquiries: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/inquiries')
      this.inquiries = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
