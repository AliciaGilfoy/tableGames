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
    <div v-if="single==true" class="game-row row py-2">
      <h4>Which game would you like to play?</h4>
      <button class="col-6 btn btn-block btn-warning m-2">Rock, Paper, Scissors</button>
      <button class="col-6 btn btn-block btn-warning m-2">Tic, Tac, Toe</button>
      <button class="col-6 btn btn-block btn-warning m-2">Math</button>
    </div>
    <div v-if="multi==true" class="game-row row py-2">
      <h4>Which game would you like to play?</h4>
      <button class="col-6 btn btn-block btn-warning m-2">Tic, Tac, Toe</button>
      <button class="col-6 btn btn-block btn-warning m-2">Hang Man</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      single: false,
      multi: false
    };
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
}
</style>