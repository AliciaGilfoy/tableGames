<template>
  <div class="row players-row">
    <div class="col-12 player-card">
      <div class="card player-one">
        <div class="card-image-top">
          <span :class="this.playerImage"></span>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Player One</h5>
          <div v-if="playerPick==''">
            <p class="card-text">
              Pick one
              <i class="fas fa-arrow-down"></i>
            </p>
            <div class="button-group">
              <button class="btn btn-primary m-1" @click="playerPick='Rock', drawMatch()">Rock</button>
              <button class="btn btn-success m-1" @click="playerPick='Paper', drawMatch()">Paper</button>
              <button
                class="btn btn-danger m-1"
                @click="playerPick='Scissors', drawMatch()"
              >Scissors</button>
              <button class="btn btn-warning m-1" @click="pickRandom()">I can't decide!</button>
            </div>
          </div>
          <div v-if="playerPick!=''">
            <p class="card-text">
              You Pick
              <i class="fas fa-arrow-down"></i>
            </p>
            <p class="card-text bg-danger text-white p-2">{{this.playerPick}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- input will or lose -->
    <div class="col-12 text-center result">
      <h1>{{this.matchResult}}</h1>
    </div>
    <div class="col-12 player-card">
      <div class="card player-computer border-0">
        <div class="card-image-top">
          <div :class="this.compImage"></div>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Computer</h5>
          <p class="card-text">
            Computer picks
            <i class="fas fa-arrow-down"></i>
          </p>
          <!-- input computers random choice -->
          <p class="card-text bg-danger text-white p-2">{{this.computerPick}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RPS",
  data() {
    return {
      computerPick: "",
      playerPick: "",
      choices: [
        {
          name: "Rock"
        },
        {
          name: "Paper"
        },
        {
          name: "Scissors"
        }
      ],
      matchResult: "",
      compImage: "ready",
      playerImage: "ready",
      str1: ""
    };
  },
  methods: {
    pickRandom() {
      let playerOneChoice = this.choices[Math.floor(Math.random() * 3)].name;
      this.playerPick = playerOneChoice;
      this.playerImage = this.playerPick;
      let computerPick = this.choices[Math.floor(Math.random() * 3)].name;
      this.compImage = computerPick;
      this.computerPick = computerPick;
      this.drawWinner();
      // drawWinner(playerPickStatusElem, computerPickStatusElem)
    },
    // after any player 1 button is clicked this makes the computer pick a random picture
    drawMatch() {
      this.playerImage = this.playerPick;
      let computerPick = this.choices[Math.floor(Math.random() * 3)].name;
      this.compImage = computerPick;
      this.computerPick = computerPick;
      this.drawWinner();
    },

    // this determines the winner
    drawWinner() {
      let result = this.playerPick + "|" + this.computerPick;
      switch (result) {
        case "Rock|Rock":
          this.matchResult = "Draw";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Rock|Paper":
          this.matchResult = "You Lose";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Rock|Scissors":
          this.matchResult = "You Win";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Paper|Rock":
          this.matchResult = "You Win";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Paper|Paper":
          this.matchResult = "Draw";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Paper|Scissors":
          this.matchResult = "You Lose";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Scissors|Rock":
          this.matchResult = "You Lose";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Scissors|Paper":
          this.matchResult = "You Win";
          setTimeout(this.resetMatch, 3000);
          break;
        case "Scissors|Scissors":
          this.matchResult = "Draw";
          setTimeout(this.resetMatch, 3000);
          break;
      }
    },
    // after clicking play again the game resets
    resetMatch() {
      this.compImage = "ready";
      this.playerImage = "ready";
      this.computerPick = "";
      this.playerPick = "";
      this.matchResult = "";
    }
  }
};
</script>

<style scoped>
.players-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}

.card-img-top {
  height: 8rem;
  width: 8rem;
}

.button-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.result {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: aqua;
}

.ready {
  background-image: url(../assets/fist.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(-90deg);
  height: inherit;
  width: inherit;
}

.Rock {
  background-image: url(../assets/rock.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: inherit;
  width: inherit;
}

.Paper {
  background-image: url(../assets/paper.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: inherit;
  width: inherit;
}

.Scissors {
  background-image: url(../assets/scissors.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: inherit;
  width: inherit;
}

#player-choice {
  color: transparent;
}
</style>