<template>
  <section class="container">
    <Home :weather="$store.state.location.weather"/>
  </section>
</template>

<script>
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
  head () {
    return {
      title: 'Weather Explorer'
    }
  }
}
</script>

<style>
</style>
