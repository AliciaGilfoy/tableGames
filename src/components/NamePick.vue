<template>
  <div>
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>