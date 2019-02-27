<template>
  <section class="container">
    <WeeklyWeather :weather="$store.state.location.weather" :key="$store.state.location.weather.id"/>
  </section>
</template>

<script>
import WeatherInfo from '~/components/WeatherInfo.vue'
import WeeklyWeather from '~/components/WeeklyWeather.vue'

export default {
  data () {
    return {}
  },
  components: {
    WeatherInfo,
    WeeklyWeather
  },
  name: 'id',
  head () {
    return {
      title: 'Weather Explorer'
    }
  }
}
</script>

<style>
</style>
