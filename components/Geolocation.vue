<template>
  <section class="container">
    <div>
      <h2>Geolocation</h2>
      <p>Lat: {{ lat }}</p>
      <p>Lng: {{ lng }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Geolocation',
  data () {
    return {
      lat: 0,
      lng: 0
    }
  },
  mounted () {
    // get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lat = pos.coords.latitude
          this.lng = pos.coords.longitude
        },
        () => {
          // timeout, centre by default values
          this.lat = 39.0997
          this.lng = 94.5786
        }
      )
    }
  }
}
</script>

<style></style>
