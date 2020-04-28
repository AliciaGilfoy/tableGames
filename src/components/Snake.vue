<template>
  <div class="row snake-game">
    <h2 class="col-12 text-center text-info">Welcome to Snake!</h2>
    <canvas id="canvas" width="400" height="400"></canvas>
    <div class="col-12 mt-4">
      <div class="row control">
        <button>
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
      <div class="row control">
        <button>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="bg-dark" disabled>
          <i class="fas fa-square-full"></i>
        </button>
        <button>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div class="row control">
        <button>
          <i class="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snake",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      for (let x = 0; x < 400; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, 500);
        context.strokeStyle = "grey";
        context.stroke();
      }

      for (let y = 0; y < 400; y += 20) {
        context.moveTo(0, y);
        context.lineTo(500, y);
        context.strokeStyle = "grey";
        context.stroke();
      }
      context.fillStyle = "#FF0000";
      let apple = context.fillRect(240, 80, 20, 20);
      context.fillStyle = "white";
      let snake = context.fillRect(200, 300, 20, 80);
    }
  }
};
</script>

<style scoped>
.control {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#canvas {
  border: 1px solid #80808094;
  background-color: rgb(61, 60, 60);
}
.snake-game {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>