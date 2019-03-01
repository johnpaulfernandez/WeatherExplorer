<template>
  <section class="container">
    <Home v-if="showChart"/>
    <hr>
    <Map v-if="showChart"></Map>
  </section>
</template>

<script>
import Home from '~/components/Home.vue'
import Map from '~/components/Map.vue'

export default {
  data () {
    return {showChart: false}
  },
  components: {
    Home,
    Map
  },
  head () {
    return {
      title: 'Weather Explorer'
    }
  },
  mounted () {
    this.showChart = true // Will only be set to true on the client. This keeps the DOM-tree in sync.
  }
}
</script>

<style>
</style>
