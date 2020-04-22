import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeGame: "",
    player1: {},
    player2: {},

  },
  mutations: {
    setActiveGame(state, game) {
      state.activeGame = game
    },
    setPlayer1(state, player) {
      state.player1 = player
    },
    setPlayer2(state, player) {
      state.player2 = player
    }
  },
  actions: {
    setActiveGame({ commit }, game) {
      commit("setActiveGame", game)
    },
    setPlayer1({ commit }, player) {
      commit("setPlayer1", player)
    },
    setPlayer2({ commit }, player) {
      commit("setPlayer2", player)
    }
  },
})
