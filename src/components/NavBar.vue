<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'Home'}">
      <img class="logo" alt="Game logo" src="../assets/logo.png" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {}
};
</script>

<style scoped>
.logo {
  height: 75px;
  width: 75px;
}
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>