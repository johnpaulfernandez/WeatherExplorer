<template>
  <section class="container">
    <WeeklyWeather :weather="weather"/>
  </section>
</template>

<script>
import WeatherInfo from '~/components/WeatherInfo.vue'
import WeeklyWeather from '~/components/WeeklyWeather.vue'
import axios from 'axios'

export default {
  data () {
    return {}
  },
  components: {
    WeatherInfo,
    WeeklyWeather
  },
  name: 'id',
  asyncData ({ params, error, store }) {
    return axios
      .get('/api/forecast/', {
        params: {
          zip: store.state.location.location
        }
      })
      .then(res => {
        return { weather: res.data }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Page not found' })
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
