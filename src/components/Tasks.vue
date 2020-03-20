<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task-item">
          <div class="task-title" @click="setTask(1)">Задание 1</div>
          <!-- <div class="task-body">Задание 12</div> -->
        </div>
      </div>
      <div class="task-block">
        <div class="task-item">
          <div class="task-title">Задание 2</div>
        </div>
      </div>
      <div class="task-block">
        <div class="task-item">
          <div class="task-title">Задание 4</div>
        </div>
      </div>
      <div class="task-block">
        <div class="task-item">
          <div class="task-title">Задание 5</div>
        </div>
      </div>
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

  methods:{
      setTask(item){
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
  background-image: url(http://cheep-cheep.ru/wp-content/uploads/2018/04/cipaegg_web_06.png);
}
.task-block {
  width: 40%;
  justify-self: center;
  background-color: #f98d66;
  height: 145px;
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
</style>