// initial state
const state = {
  formErrors: {}
}

// getters
const getters = {

}

// actions
const actions = {
  async createProduct ({ commit }, payload) {
    const { data, onSuccess } = payload
    try {
      const result = await checkData(data)
      onSuccess(result)
    } catch (e) {
      commit('setFormErrors', JSON.parse(e))
    }
  }
}

// mutations
const mutations = {
  setFormErrors (state, errors) {
    state.formErrors = errors
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

function checkData (data) {
  const { name } = data
  return new Promise((resolve, reject) => {
    const error = JSON.stringify({ name: 'to short name' })
    name.length > 3 ? resolve(data) : reject(error)
  })
}
