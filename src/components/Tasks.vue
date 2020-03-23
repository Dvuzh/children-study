<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block" :class="{'finished':finishedTask == 1}"  @click="setTask(1)">
        <div class="task-item">
          <div class="task-title">Задание 1</div>
          <!-- <div class="task-body">Задание 12</div> -->
        </div>
      </div>
      <div class="task-block" :class="{'finished':finishedTaski == 2}"  @click="setTask(2)">
        <div class="task-item">
          <div class="task-title">Задание 2</div>
        </div>
      </div>
      <!-- <div class="task-block">
        <div class="task-item">
          <div class="task-title">Задание 4</div>
        </div>
      </div>
      <div class="task-block">
        <div class="task-item">
          <div class="task-title">Задание 5</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Tasks",
  data: function() {
    return {};
  },
  computed: {
    finishedTask() {
      return this.$store.getters.finishedTask;
    },
    finishedTaski() {
      return this.$store.getters.finishedTaski;
    }
  },

  methods: {
    setTask(item) {
      this.setOpenTask(item);
    },
    ...mapMutations(["setOpenTask"])
  }
};
</script>

<style scoped>
.tasks-block {
  padding-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 100px;
}
.task-block {
  width: 40%;
  justify-self: center;
  background-color: #f98d66;
  height: 145px;
  cursor:pointer;
}

.task-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.task-title {
  font-family: "Ubuntu Condensed", Calibri, "AppleGothic", "MgOpen Modata",
    sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: lighter;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

.task-block.finished{
  background-color:green;
}
</style>