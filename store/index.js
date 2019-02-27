export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('location/getWeather')
  }
}
