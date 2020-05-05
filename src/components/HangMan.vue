<template>
  <div class="w-100 p-0">
    <div class="col-12 text-center p-0 m-0">
      <div :class="gameProgress" id="gameboard">
        <div class="row">
          <h3 class="col-12 text-danger p-0" v-if="activePlayer === 'Player2'">
            {{Player1.name}} pick a word.
            <br />
            {{Player2.name}} is guessing.
          </h3>
          <h3 class="col-12 text-danger p-0" v-else-if="activePlayer === 'Player1'">
            {{Player2.name}} pick a word.
            <br />
            {{Player1.name}} is guessing.
          </h3>
        </div>
        <div class="row input-row bg-info border border-dark py-3" v-if="!gameStarted">
          <form @submit="startGame">
            <div class="input-group">
              <input class="form-control" type="text" v-model="gameWord" />
              <div class="input-group-append">
                <button class="btn btn-sm btn-success mx-2" type="submit">Start Game</button>
              </div>
            </div>
          </form>
        </div>
        <div class="row input-row bg-danger" v-if="loseGame">
          <h1 class="bg-danger text-white text-center col-12 p-2 m-1">
            You ran out of guesses, You lose.
            <br />
            The correct answer was {{gameWord}}
          </h1>
          <button @click="playAgain" class="btn btn-success">Play Again</button>
        </div>
        <div class="row input-row bg-success py-3" v-if="winGame">
          <h1 class="bg-success text-white text-center col-12 p-2 m-1">You win!</h1>
          <button @click="playAgain" class="btn btn-info">Play Again</button>
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
      loseGame: false,
      activePlayer: "Player2",
      winGame: false
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
    guess(letter) {
      let goodGuess = this.gameWord.includes(letter);
      if (goodGuess == true) {
        let gameWord = this.gameWord;
        let blankSpaces = this.blankSpaces.split("");
        for (let i = 0; i < gameWord.length; i++) {
          let findLetter = gameWord[i];
          if (findLetter == letter) {
            blankSpaces[i] = letter;
          }
          this.blankSpaces = blankSpaces.join("");
        }
        let keepPlaying = this.blankSpaces.includes("-");
        if (keepPlaying == false) {
          this.winGame = true;
          if (this.activePlayer == "Player2") {
            let score = (this.Player2.score += 1);
            this.$store.dispatch("updatePlayer2Score", score);
          } else {
            let score = (this.Player1.score += 1);
            this.$store.dispatch("updatePlayer1Score", score);
          }
        }
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
            if (this.activePlayer == "Player2") {
              let score = (this.Player2.score -= 1);
              this.$store.dispatch("updatePlayer2Score", score);
            } else {
              let score = (this.Player1.score -= 1);
              this.$store.dispatch("updatePlayer1Score", score);
            }
            break;
        }
      }
    },
    playAgain() {
      this.gameProgress = "start";
      this.gameStarted = false;
      this.gameWord = "";
      this.lettersGuessed = "";
      this.blankSpaces = "";
      this.loseGame = false;
      this.winGame = false;
      if (this.activePlayer == "Player2") {
        this.activePlayer = "Player1";
      } else {
        this.activePlayer = "Player2";
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