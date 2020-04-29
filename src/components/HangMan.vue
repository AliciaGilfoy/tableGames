<template>
  <div class="row">
    <h2 class="col-12 text-center">Let's Play Hang Man.</h2>
    <div class="col-12 gameboard text-center">
      <h3 class="head">{{this.top3Head}}</h3>
      <h3 class="chestArms">{{this.top4ChestArms}}</h3>
      <h3 class="legs">{{this.top5Legs}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HangMan",
  data() {
    return {
      top3Head: " O",
      top4ChestArms: "-|-",
      top5Legs: "/ \\"
    };
  }
};
</script>

<style scoped>
.gameboard {
  height: 25rem;
  width: 100vw;
  background-color: gray;
}
</style>