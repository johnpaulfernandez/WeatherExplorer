export const state = () => ({
  location: '91107',
  weather: []
})

export const mutations = {
  update (state, zip) {
    state.location = zip
  },
  setWeather (state, weather) {
    state.weather = weather
  }
}

export const actions = {
  async getWeather ({ commit, state }) {
    await this.$axios.get('/api/forecast/', {
      params: {
        zip: state.location
      }
    })
      .then(res => {
        if (res.status === 200) {
          commit('setWeather', res.data)
        }
      })
  },
  async setWeather ({commit}, weather) {
    await commit('setWeather', weather)
  }
}
