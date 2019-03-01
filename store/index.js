export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('forecast/getWeather')
  }
}
