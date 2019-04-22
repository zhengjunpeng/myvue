import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  'count': 1
}

const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  },
  addTwo (state) {
    state.count += 2
  }
}

const actions = {
  add: ({ commit }) => commit('add'),
  reduce: ({ commit }) => commit('reduce'),
  addTwo ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('addTwo')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  count: state => state.count
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})
