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
  async fetch ({ store }) {
    await store.dispatch('location/getWeather')
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'location/update':
          console.log(`subscribe ${state.location.location}`)

          this.$store.dispatch('location/getWeather', state.location.location)
          break
      }
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
