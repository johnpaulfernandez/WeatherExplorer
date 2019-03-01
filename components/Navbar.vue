<template>
  <div>
    <b-navbar toggleable="md" type="dark" class="navbar-bg">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <div class="container">
        <b-navbar-brand>
          <nuxt-link :to="{path: '/'}">Weather Explorer</nuxt-link>
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-5">
            <nuxt-link :to="{path: `/forecast/${getLocation}` }" class="nav-link">More Forecasts</nuxt-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" @submit.prevent="submit">
            <b-nav-form>
              <font-awesome-icon id="icon" icon="search" class="text-white" style="font-size: 1.5rem"/>
              <input size="sm" class="ml-2" type="text" placeholder="Zip code" v-model="location">
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      location: ''
    }
  },
  computed: {
    getLocation () {
      return this.$store.state.forecast.location
    }
  },
  methods: {
    submit () {
      this.setLocation(this.location)
      this.$store.dispatch('forecast/getWeather')
    },

    ...mapMutations({
      setLocation: 'forecast/updateLocation'
    })
  }
}
</script>

<style lang="scss">
.navbar-bg {
  background-color: rgb(26, 25, 25);
}
</style>
