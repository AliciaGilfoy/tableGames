<template>
  <div class="row">
    <div class="col-12 text-center p-0 m-0">
      <div :class="gameProgress" id="gameboard">
        <div class="row">
          <h3 class="col-12 text-danger" v-if="ActivePlayer.name === Player2.name">
            {{Player1.name}} pick a word.
            <br />
            {{Player2.name}} is guessing.
          </h3>
          <h3 class="col-12 text-danger" v-else-if="ActivePlayer.name === Player1.name">
            {{Player2.name}} pick a word.
            <br />
            {{Player1.name}} is guessing.
          </h3>
        </div>
        <div class="row input-row bg-danger p-3" v-if="!gameStarted">
          <form @submit="startGame">
            <div class="input-group">
              <input class="form-control" type="text" v-model="gameWord" />
              <div class="input-group-append">
                <button class="btn btn-sm btn-success mx-2" type="submit">Start Game</button>
              </div>
            </div>
          </form>
        </div>
        <div class="row float-right guessedLetters m-3" v-if="gameStarted">
          <p class="col-12 text-right">Letters Guessed:</p>
          <h4 class="col-12 text-right">{{lettersGuessed}}</h4>
        </div>
        <div class="row blank-spaces">
          <h3 class="col-12 p-1 h1">{{blankSpaces}}</h3>
        </div>
      </div>
      <div class="row button-row m-2" v-if="gameStarted">
        <div v-for="char in this.alphabet">
          <button @click="guess(char)" class="btn btn-sm btn-secondary m-1">{{char}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HangMan",
  data() {
    return {
      gameProgress: "start",
      gameStarted: false,
      gameWord: "",
      lettersGuessed: "",
      blankSpaces: "",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      loseGame: false
    };
  },
  mounted() {
    this.$store.dispatch("setActivePlayer", this.Player2);
  },
  computed: {
    Player1() {
      return this.$store.state.player1;
    },
    Player2() {
      return this.$store.state.player2;
    },
    ActivePlayer() {
      return this.$store.state.activePlayer;
    }
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.gameWord = this.gameWord.toUpperCase();
      let gameWord = this.gameWord;
      this.blankSpaces = "";
      for (let i = 0; i < gameWord.length; i++) {
        let letter = gameWord[i];
        if (letter.match(/[a-z]/i)) {
          this.blankSpaces += "-";
        } else if (letter === " ") {
          this.blankSpaces += " ";
        } else {
          this.blankSpaces += letter;
        }
      }
    },
    // I need to break the blankspaces into an array so I can replace the letters. I need to also set up a dictionary with the value being the index.
    guess(letter) {
      if (this.gameWord.includes(letter)) {
        let gameWord = this.gameWord;
        let blankSpaces = "";
        for (let i = 0; i < gameWord.length; i++) {
          let thisLetter = gameWord[i];
          if (thisLetter === letter) {
            blankSpaces += letter;
          } else {
            if (letter.match(/[a-z]/i)) {
              blankSpaces += "-";
            } else if (letter === " ") {
              blankSpaces += " ";
            } else {
              blankSpaces += letter;
            }
          }
        }
        this.blankSpaces = blankSpaces;
        this.lettersGuessed += " " + letter;
      } else {
        this.lettersGuessed += " " + letter;
        switch (this.gameProgress) {
          case "start":
            this.gameProgress = "head";
            break;
          case "head":
            this.gameProgress = "body";
            break;
          case "body":
            this.gameProgress = "arm";
            break;
          case "arm":
            this.gameProgress = "botharms";
            break;
          case "botharms":
            this.gameProgress = "leg";
            break;
          case "leg":
            this.gameProgress = "bothlegs";
            this.loseGame = true;
            break;
        }
      }
    }
  }
};
</script>

<style scoped>
#gameboard {
  height: 25rem;
  width: 100vw;
  background-color: rgb(150, 211, 247);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.start {
  background-image: url(../assets/hangmanStart.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.head {
  background-image: url(../assets/hangmanHead.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.body {
  background-image: url(../assets/hangmanBody.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.arm {
  background-image: url(../assets/hangmanArm1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.botharms {
  background-image: url(../assets/hangmanArm2.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.leg {
  background-image: url(../assets/hangmanLeg1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.bothlegs {
  background-image: url(../assets/hangmanLeg2.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.input-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.guessedLetters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.button-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>