<template>
  <section class="container weather-info text-light">
    <div>
      <h4 class="pt-5 mb-0">Weather in {{ location }}</h4>
      <p class="subtitle mb-0">Friday</p>

      <h1 class="mt-3">
        {{ weather.tempMax[0] }} °F
        <img :src="`${BASE_IMAGE_URL}${weather.icon[0]}.png`">
      </h1>

      <p class="mb-0 text-uppercase">{{ weather.description[0] }}</p>
      <span class="subtitle mb-0">High {{ weather.tempMax[0] }} °F /</span>
      <span class="subtitle mb-0">Low {{ weather.tempMin[0] }} °F</span>

      <p class="mt-5 mb-0">Humidity: 70%</p>
      <p class="mb-0">Wind: Calm, 1.0 m/s, South (180)</p>
      <p class="mb-0">Cloudiness: Sky is clear</p>
      <p class="mb-0">Pressure: 1021 hpa</p>
      <p class="mb-0">Sunrise: 06:40</p>
      <p class="mb-0">Sunset: 17:33</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    BASE_IMAGE_URL: () => 'http://openweathermap.org/img/w/',
    weather () {
      return this.$store.state.forecast.weather
    },
    location () {
      return this.$store.state.forecast.location
    }
  }
}
</script>

<style>
.weather-info {
  background-image: linear-gradient(to top, rgba(0, 116, 217, 0.527), rgb(0, 116, 217));
  height: 50vh;
}

.subtitle {
  color: hsla(0, 0%, 100%, 0.5);
}
</style>
