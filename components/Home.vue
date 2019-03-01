<template>
  <section class>
    <div class="row mt-5">
      <div class="col-md-3">
        <WeatherInfo :weather="weather"/>
      </div>
      <div class="col-md-9 mb-5" :key="$store.state.location.weather.id">
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="NEXT 24 HOURS" active>
              <DailyWeather :weather="weather"/>
            </b-tab>
            <b-tab title="NEXT 5 DAYS" class="font-weight-bold">
              <WeeklyWeather :weather="weather"/>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DailyWeather from '~/components/DailyWeather.vue'
import WeatherInfo from '~/components/WeatherInfo.vue'
import WeeklyWeather from '~/components/WeeklyWeather.vue'

export default {
  props: ['weather'],
  components: {
    DailyWeather,
    WeatherInfo,
    WeeklyWeather
  }
}
</script>

<style>
</style>
