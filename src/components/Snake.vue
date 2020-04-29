<template>
  <div class="row snake-game">
    <h2 class="col-12 text-center text-info">Welcome to Snake!</h2>
    <button v-if="!started" @click="started=true, startGame()" class="btn btn-success m-2">Start</button>
    <button v-if="started" @click="started=true, startGame()" class="btn btn-success m-2">Restart</button>
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
  data() {
    return {
      myGameArea: {
        canvas: document.getElementById("canvas"),
        context: canvas.getContext("2d"),
        start: function() {
          this.canvas.width = 400;
          this.canvas.height = 400;
          this.context = canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.interval = setInterval(updateGameArea, 20);
        }
      },
      started: false
    };
  },
  methods: {
    draw() {
      this.myGameArea;
      for (let x = 0; x < 400; x += 20) {
        this.context.moveTo(x, 0);
        this.context.lineTo(x, 500);
        this.context.strokeStyle = "grey";
        this.context.stroke();
      }

      for (let y = 0; y < 400; y += 20) {
        this.context.moveTo(0, y);
        this.context.lineTo(500, y);
        this.context.strokeStyle = "grey";
        this.context.stroke();
      }
    },
    startGame() {
      this.myGameArea.context.fillStyle = "#FF0000";
      let apple = context.fillRect(240, 80, 20, 20);
      this.myGameArea.context.fillStyle = "white";
      let snake = context.fillRect(200, 300, 20, 80);
      setInterval(this.updateGameArea, 20);
    },
    clear() {
      this.context.clearRect(0, 0, 400, 400);
    },
    updateGameArea() {}
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