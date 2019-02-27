<template>
  <div>
    <h1>Google Maps Demo</h1>

    <GmapMap v-bind:center="center" v-bind:map-type-id="mapTypeId" v-bind:zoom="5">
      <GmapMarker v-for="(item, index) in markers" v-bind:key="index" v-bind:position="item.position" @click="center=item.position"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [{ position: { lat: -0.48585, lng: 117.1466 } }, { position: { lat: -6.9127778, lng: 107.6205556 } }]
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>
