import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activePlayer: {},
    activeGame: {},
    player1: {
      name: "Player1",
      score: 0,
    },
    player2: {
      name: "Player2",
      score: 0,
    },

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
    },
    updatePlayer1Score(state, score) {
      state.player1.score = score
    },
    updatePlayer2Score(state, score) {
      state.player2.score = score
    },
    setActivePlayer(state, player) {
      state.activePlayer = player
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
    },
    updatePlayer1Score({ commit }, score) {
      commit("updatePlayer1Score", score)
    },
    updatePlayer2Score({ commit }, score) {
      commit("updatePlayer2Score", score)
    },
    setActivePlayer({ commit }, player) {
      commit("setActivePlayer", player)
    }
  },
})
