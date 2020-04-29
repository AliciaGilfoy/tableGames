<template>
  <div class="home container bg-secondary">
    <div class="row header text-center py-2 border-bottom border-dark">
      <h1 class="border border-dark m-2 p-2 bg-primary">
        Welcome to
        <br />
        <span class="text-white">
          <strong>Table Games</strong>
        </span>
      </h1>
      <h4 class="col-10 text-center py-2">
        Single player games
        <br />or 2 player games?
      </h4>
      <div class="btn-row">
        <button @click="single=true, multi=false" class="btn btn-primary p-2 m-2">Single-Player</button>
        <button @click="single=false, multi=true" class="btn btn-primary p-2 m-2">2-Player</button>
      </div>
    </div>
    <div v-if="multi" class="player-row row pt-5">
      <h4 class="border border-warning p-2 m-1 col-5">Player 1: {{player1}}</h4>
      <h4 class="border border-warning p-2 m-1 col-5">Player 2: {{player2}}</h4>
      <button @click="editingName=true" class="btn btn-info btn-sm col-6">Edit Names</button>
    </div>
    <div v-if="single" class="game-row row pt-5">
      <h4 class="border border-warning p-2 m-1">Player 1: {{player1}}</h4>
      <button @click="editingName=true" class="btn btn-info btn-sm">Edit Name</button>
    </div>
    <div v-if="multi==true && editingName==true" class="player-row row">
      <form id="nameForm" @submit.prevent="setPlayerNames()">
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
    </div>
    <div v-if="single==true && editingName==true" class="game-row row">
      <form id="nameForm" @submit.prevent="setPlayerNames()">
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
    </div>
    <div
      v-if="single==true"
      class="game-row row p-2 border border-primary bg-white m-1 text-center mt-5"
    >
      <h4 class="border-bottom border-dark pb-1">Pick a game to play!</h4>
      <button
        @click="setActiveGame('RockPaperScissors')"
        class="col-6 btn btn-block btn-danger m-2"
      >Rock, Paper, Scissors</button>
      <button @click="setActiveGame('Snake')" class="col-6 btn btn-block btn-danger m-2">Snake</button>
    </div>
    <div
      v-if="multi==true"
      class="game-row row p-2 border border-primary bg-white m-1 text-center mt-5"
    >
      <h4 class="border-bottom border-dark pb-1">Pick a game to play!</h4>
      <button
        @click="setActiveGame('TicTacToe')"
        class="col-6 btn btn-block btn-danger m-2"
      >Tic, Tac, Toe</button>
      <button @click="setActiveGame('HangMan')" class="col-6 btn btn-block btn-danger m-2">Hang Man</button>
      <button @click="setActiveGame('Checkers')" class="col-6 btn btn-block btn-danger m-2">Checkers</button>
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
      editingName: false
    };
  },
  methods: {
    setActiveGame(name) {
      let game = {
        name: name,
        multiplayer: this.multi
      };
      this.$store.dispatch("setActiveGame", game);
      this.$router.push({ name: "Game" });
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
      this.editingName = false;
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
.player-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>