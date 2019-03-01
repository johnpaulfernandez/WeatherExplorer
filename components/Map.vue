<template>
  <div>
    <GmapMap v-bind:center="center" v-bind:map-type-id="mapTypeId" v-bind:zoom="15">
      <GmapMarker v-for="(item, index) in markers" v-bind:key="index" v-bind:position="item.position" @click="center=item.position"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: 34.164242, lng: -118.083008 },
      mapTypeId: 'terrain',
      markers: [{ position: { lat: 34.164242, lng: -118.083008 } }]
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  width: 100%;
}
</style>