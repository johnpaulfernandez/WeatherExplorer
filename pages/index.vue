<template>
  <section class="container">
    <Home :weather="weather"/>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Home from '~/components/Home.vue'

export default {
  data () {
    return {
      location: ''
    }
  },
  components: {
    Home
  },
  asyncData ({ params, store }) {
    return axios
      .get('/api/forecast/', {
        params: {
          zip: store.state.location.location
        }
      })
      .then(res => {
        return { weather: res.data }
      })
  },
  head () {
    return {
      title: 'Weather Explorer'
    }
  }
}
</script>

<style>
</style>
