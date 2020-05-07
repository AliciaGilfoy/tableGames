<template>
  <div class="col-12 py-2">
    <div class="row p-2 m-2 text-center">
      <h2 class="col-12">
        <span class="px-1">
          {{Player1.name}}:
          <i class="far fa-circle"></i>
        </span>
        <span class="px-1">
          {{Player2.name}}:
          <i class="fas fa-times"></i>
        </span>
      </h2>
    </div>
    <div class="row p-2 m-2 text-center">
      <h2
        class="bg-success text-white p-1 border border-info col-12"
        v-if="activePlayer == 1"
      >{{Player1.name}}'s turn.</h2>
      <h2
        class="bg-success text-white p-1 border border-info col-12"
        v-else
      >{{Player2.name}}'s turn.</h2>
    </div>
    <div class="row p-3 bg-primary">
      <div class="col-4 box p-1 border-right border-bottom border-dark">
        <button @click="pickBox(1)" class="btn btn-primary btn-block h-100">{{this.box1}}</button>
      </div>
      <div class="col-4 box p-1 border-left border-right border-bottom border-dark">
        <button @click="pickBox(2)" class="btn btn-primary btn-block h-100">{{this.box2}}</button>
      </div>
      <div class="col-4 box p-1 border-left border-bottom border-dark">
        <button @click="pickBox(3)" class="btn btn-primary btn-block h-100">{{this.box3}}</button>
      </div>
      <div class="col-4 box p-1 border-right border-bottom border-top border-dark">
        <button @click="pickBox(4)" class="btn btn-primary btn-block h-100">{{this.box4}}</button>
      </div>
      <div class="col-4 box p-1 border border-dark">
        <button @click="pickBox(5)" class="btn btn-primary btn-block h-100">{{this.box5}}</button>
      </div>
      <div class="col-4 box p-1 border-left border-top border-bottom border-dark">
        <button @click="pickBox(6)" class="btn btn-primary btn-block h-100">{{this.box6}}</button>
      </div>
      <div class="col-4 box p-1 border-right border-top border-dark">
        <button @click="pickBox(7)" class="btn btn-primary btn-block h-100">{{this.box7}}</button>
      </div>
      <div class="col-4 box p-1 border-right border-left border-top border-dark">
        <button @click="pickBox(8)" class="btn btn-primary btn-block h-100">{{this.box8}}</button>
      </div>
      <div class="col-4 box p-1 border-left border-top border-dark">
        <button @click="pickBox(9)" class="btn btn-primary btn-block h-100">{{this.box9}}</button>
      </div>
    </div>
    <div v-if="results == 'win'" class="row text-center bg-warning my-2 py-1">
      <h1 class="col-12">
        Three in a row!
        <br />
        {{this.winner}} WINS!
      </h1>
      <div class="col-12 text-center my-1">
        <button @click="playAgain()" class="btn btn-secondary">Play Again</button>
      </div>
    </div>
    <div v-else-if="results == 'draw'" class="row text-center bg-warning my-2 py-1">
      <h1 class="col-12">Cat's Game.</h1>
      <div class="col-12 text-center my-1">
        <button @click="playAgain()" class="btn btn-secondary">Play Again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicTacToe",
  data() {
    return {
      emptyBoxes: 45,
      player1: [],
      player2: [],
      activePlayer: 1,
      winner: "",
      results: "",
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: ""
    };
  },
  computed: {
    Player1() {
      return this.$store.state.player1;
    },
    Player2() {
      return this.$store.state.player2;
    }
  },
  methods: {
    playAgain() {
      this.emptyBoxes = 45;
      this.player1 = [];
      this.player2 = [];
      this.winner = "";
      this.results = "";
      if (this.winner === this.Player1.name) {
        this.activePlayer = 1;
      } else {
        this.activePlayer = 2;
      }
    },
    pickBox(num) {
      let symbol = "";
      if (this.activePlayer === 1) {
        symbol = '<i class="far fa-circle"></i>';
        this.player1.push(num);
      } else {
        symbol = '<i class="fas fa-times"></i>';
        this.player2.push(num);
      }
      this.emptyBoxes -= num;
      let box = "box" + num.toString();
      console.log(box);

      this.checkForWin();
    },
    checkForWin() {
      if (this.activePlayer == 1) {
        let places = this.player1.toString();
      } else {
        let places = this.player2.toString();
      }
      switch (places) {
        case 123:
          console.log("win");
          break;
        case 456:
          console.log("win");
          break;
        case 789:
          console.log("win");
          break;
        case 147:
          console.log("win");
          break;
        case 258:
          console.log("win");
          break;
        case 369:
          console.log("win");
          break;
        case 159:
          console.log("win");
          break;
        case 357:
          console.log("win");
          break;
        default:
          if (this.emptyBoxes == 0) {
            this.results == "draw";
          } else {
            if (this.activePlayer == 1) {
              this.activePlayer == 2;
            } else {
              this.activePlayer == 1;
            }
          }
          break;
      }
    }
  }
};
</script>

<style scoped>
.box {
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>