<template>
  <div class="col-12 py-2">
    <div class="row p-2 m-2 text-center">
      <h2 class="col-12">
        <span class="px-1 text-success">{{Player1.name}} is O</span>
        <span class="px-1 text-danger">{{Player2.name}} is X</span>
      </h2>
    </div>
    <div class="row p-2 m-2 text-center">
      <h2
        class="bg-success text-white p-1 border border-info col-12"
        v-if="activePlayer == 1"
      >{{Player1.name}}'s turn.</h2>
      <h2 class="bg-danger text-white p-1 border border-info col-12" v-else>{{Player2.name}}'s turn.</h2>
    </div>
    <div class="row p-3 bg-primary">
      <div class="col-4 box p-1 border-right border-bottom border-dark">
        <button @click="pickBox(1)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box1}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-left border-right border-bottom border-dark">
        <button @click="pickBox(2)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box2}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-left border-bottom border-dark">
        <button @click="pickBox(3)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box3}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-right border-bottom border-top border-dark">
        <button @click="pickBox(4)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box4}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border border-dark">
        <button @click="pickBox(5)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box5}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-left border-top border-bottom border-dark">
        <button @click="pickBox(6)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box6}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-right border-top border-dark">
        <button @click="pickBox(7)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box7}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-right border-left border-top border-dark">
        <button @click="pickBox(8)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box8}}</span>
        </button>
      </div>
      <div class="col-4 box p-1 border-left border-top border-dark">
        <button @click="pickBox(9)" class="btn btn-primary btn-block h-100">
          <span class="display-4">{{this.boxes.box9}}</span>
        </button>
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
      boxes: {
        box1: "",
        box2: "",
        box3: "",
        box4: "",
        box5: "",
        box6: "",
        box7: "",
        box8: "",
        box9: ""
      }
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
        symbol = "O";
        this.player1.push(num);
      } else {
        symbol = "X";
        this.player2.push(num);
      }
      this.emptyBoxes -= num;
      let box = "box" + num.toString();
      this.boxes[box] = symbol;
      this.checkForWin();
    },
    checkForWin() {
      let places = [];
      if (this.activePlayer == 1) {
        places = this.player1;
        this.winner = this.Player1.name;
      } else {
        places = this.player2;
        this.winner = this.Player2.name;
      }
      if (places.includes(1) && places.includes(2) && places.includes(3)) {
        this.results = "win";
      } else if (
        places.includes(4) &&
        places.includes(5) &&
        places.includes(6)
      ) {
        this.results = "win";
      } else if (
        places.includes(7) &&
        places.includes(8) &&
        places.includes(9)
      ) {
        this.results = "win";
      } else if (
        places.includes(1) &&
        places.includes(4) &&
        places.includes(7)
      ) {
        this.results = "win";
      } else if (
        places.includes(2) &&
        places.includes(5) &&
        places.includes(8)
      ) {
        this.results = "win";
      } else if (
        places.includes(3) &&
        places.includes(6) &&
        places.includes(9)
      ) {
        this.results = "win";
      } else if (
        places.includes(1) &&
        places.includes(5) &&
        places.includes(9)
      ) {
        this.results = "win";
      } else if (
        places.includes(3) &&
        places.includes(5) &&
        places.includes(7)
      ) {
        this.results = "win";
      } else if (this.emptyBoxes == 0) {
        this.results == "draw";
      } else {
        if (this.activePlayer == 1) {
          this.activePlayer = 2;
        } else {
          this.activePlayer = 1;
        }
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