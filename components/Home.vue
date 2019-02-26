<template>
  <section class="container">
    <div class="row mt-5">
      <div class="col-md-3">
        <WeatherInfo :weather="weather"/>
      </div>
      <div class="col-md-9" :key="$store.state.location.weather.id">
        <DailyWeather :weather="weather"/>
      </div>
    </div>
  </section>
</template>

<script>
import DailyWeather from '~/components/DailyWeather.vue'
import WeatherInfo from '~/components/WeatherInfo.vue'

export default {
  props: ['weather'],
  components: {
    DailyWeather,
    WeatherInfo
  }
}
</script>

<style>
</style>
