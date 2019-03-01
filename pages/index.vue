<template>
  <section class="container">
    <Home :weather="$store.state.location.weather"/>
    <hr>
    <Map></Map>
  </section>
</template>

<script>
import Home from '~/components/Home.vue'
import Map from '~/components/Map.vue'

export default {
  data () {
    return {}
  },
  components: {
    Home,
    Map
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
