// initial state
const state = {
  formErrors: {},
  productItems: JSON.parse(localStorage.getItem('items')) || []
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
      commit('setNewItem', result)
      onSuccess()
    } catch (e) {
      commit('setFormErrors', JSON.parse(e))
    }
  },

  async getItem ({ state }, payload) {
    try {
      const { id, onSuccess } = payload
      const result = await getItemRequest(state.productItems, id)
      onSuccess(result)
    } catch (e) {
      console.log(e)
    }
  },

  async updateItem ({ commit }, payload) {
    const { data, onSuccess } = payload
    try {
      const result = await checkData(data)
      commit('updateItem', result)
      onSuccess()
    } catch (e) {
      console.log(e)
    }
  }
}

// mutations
const mutations = {
  setFormErrors (state, errors) {
    state.formErrors = errors
  },
  setNewItem (state, data) {
    state.productItems.push(data)
    localStorage.setItem('items', JSON.stringify(state.productItems))
  },

  deleteItem (state, id) {
    state.productItems = state.productItems.filter(item => item.id !== id)
    localStorage.setItem('items', JSON.stringify(state.productItems))
  },

  updateItem (state, updateItem) {
    state.productItems.forEach((item, index) => {
      if (item.id === updateItem.id) state.productItems[index] = updateItem
    })
    localStorage.setItem('items', JSON.stringify(state.productItems))
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

function getItemRequest (array, id) {
  return new Promise((resolve, reject) => {
    const item = array.find(item => item.id === id)
    const error = 'Product no found'
    item ? resolve(item) : reject(error)
  })
}
