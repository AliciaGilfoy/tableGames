<template>
  <div class="container-fluid">
    <div v-if="activeGame.multiplayer" class="multi-player-row row">
      <div class="border border-danger p-2 m-1 col-5 text-center">
        <h4>Player 1: {{player1.name}}</h4>
        <h5>Score: {{player1.score}}</h5>
      </div>
      <div class="border border-danger p-2 m-1 col-5 text-center">
        <h4>Player 2: {{player2.name}}</h4>
        <h5>Score: {{player2.score}}</h5>
      </div>
    </div>
    <div v-else class="player-row row pt-2">
      <div class="border border-danger p-2 m-1 col-10 text-center">
        <h4>Player 1: {{player1.name}}</h4>
        <h5>Score: {{player1.score}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  computed: {
    player1() {
      return this.$store.state.player1;
    },
    player2() {
      return this.$store.state.player2;
    },
    activeGame() {
      return this.$store.state.activeGame;
    }
  }
};
</script>

<style scoped>
.player-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.multi-player-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>