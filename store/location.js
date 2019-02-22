export const state = () => ({
  location: '91107'
})

export const mutations = {
  update (state, zip) {
    state.location = zip
    console.log(`Store zip ${zip}`)
    console.log(`Store state.location ${state.location}`)
  }
}
