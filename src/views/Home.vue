<template>
  <div class="home container bg-secondary">
    <div class="row header text-center py-2 border-bottom border-dark">
      <img class="logo" alt="Game logo" src="../assets/logo.png" />
      <h1 class="border border-dark m-2 p-2">
        Welcome to
        <br />
        <span class="text-info">
          <strong>Table Games</strong>
        </span>
      </h1>
      <h4>Would you like to play single player games or 2 player games?</h4>
      <div class="btn-row">
        <button @click="single=true, multi=false" class="btn btn-primary p-2 m-2">Single-Player</button>
        <button @click="single=false, multi=true" class="btn btn-primary p-2 m-2">2-Player</button>
      </div>
    </div>
    <div v-if="single" class="game-row row py-2">
      <form id="nameForm" @submit.prevent="setPlayerNames()" v-if="!nameEntered">
        <div class="form-group">
          <label class="h3" for="players">Your Name:</label>
          <input
            type="text"
            class="form-control m-1"
            name="player1"
            placeholder="Enter your name..."
            v-model="player1"
          />
          <button type="submit" class="btn btn-success btn-block m-1">Save</button>
        </div>
      </form>
      <div v-if="nameEntered==true && single==true" class="game-row">
        <h4>Which game would you like to play?</h4>
        <button
          @click="setActiveGame('RPS')"
          class="col-6 btn btn-block btn-danger m-2"
        >Rock, Paper, Scissors</button>
        <button @click="setActiveGame('Snake')" class="col-6 btn btn-block btn-danger m-2">Snake</button>
      </div>
    </div>
    <div v-if="multi" class="game-row row py-2">
      <form id="nameForm" @submit.prevent="setPlayerNames()" v-if="!nameEntered">
        <div class="form-group">
          <label class="h3" for="players">Player's Names:</label>
          <input
            type="text"
            class="form-control m-1"
            name="player1"
            placeholder="Player 1 name..."
            v-model="player1"
          />
          <input
            type="text"
            class="form-control m-1"
            name="player2"
            placeholder="Player 2 name..."
            v-model="player2"
          />
          <button type="submit" class="btn btn-success btn-block m-1">Save</button>
        </div>
      </form>
      <div v-if="nameEntered==true && multi==true" class="game-row">
        <h4>Which game would you like to play?</h4>
        <button
          @click="setActiveGame('TTT')"
          class="col-6 btn btn-block btn-danger m-2"
        >Tic, Tac, Toe</button>
        <button
          @click="setActiveGame('Hangman')"
          class="col-6 btn btn-block btn-danger m-2"
        >Hang Man</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      single: false,
      multi: false,
      player1: "",
      player2: "",
      nameEntered: false
    };
  },
  methods: {
    setActiveGame(game) {
      debugger;
      this.$store.dispatch("setActiveGame", game);
    },
    setPlayerNames() {
      let playerOne = {
        name: this.player1,
        score: 0
      };
      let playerTwo = {
        name: this.player2,
        score: 0
      };
      this.$store.dispatch("setPlayer1", playerOne);
      if (playerTwo.name != "") {
        this.$store.dispatch("setPlayer2", playerTwo);
      }
      $("#nameForm").remove();
      this.nameEntered = true;
    }
  }
};
</script>

<style scoped>
.logo {
  height: 75px;
  width: 75px;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.home {
  height: 100vh;
}
</style>