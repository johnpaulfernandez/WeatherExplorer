<template>
  <section class>
    <div class="row mt-5">
      <div class="col-md-3">
        <WeatherInfo/>
      </div>
      <div class="col-md-9 mb-5" :key="$store.state.forecast.weather.id">
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="NEXT 24 HOURS" active>
              <DailyWeather/>
            </b-tab>
            <b-tab title="NEXT 5 DAYS" class="font-weight-bold">
              <WeeklyWeather/>
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
  components: {
    DailyWeather,
    WeatherInfo,
    WeeklyWeather
  }
}
</script>

<style>
</style>
