<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task" v-if="page == 0">
          <div class="task-title">Изучаем цвет Желтый</div>
          <div class="task-body">
            <div class="svg">
              <svg
                id="sun-block"
                version="1.1"
                width="500"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />
              </svg>
            </div>
            <button class="btn-go" @click="changePage(1)">Дальше</button>
          </div>
        </div>
        <div class="task" v-show="page == 1">
          <div class="task-title">Изучаем фрукты(Яблоко и банан)</div>
          <div class="task-body">
            <div class="svg">
              <svg
                id="fruits"
                version="1.1"
                width="500"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />
              </svg>
            </div>
            <button class="btn-go" @click="changePage(2)">Дальше</button>
          </div>
        </div>
        <div class="task" v-show="page == 2">
          <div class="task-title">Закрась желтым цветом яблоко</div>
          <div class="task-body">
            <div class="svg">
              <svg
                id="apples"
                version="1.1"
                width="500"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />
              </svg>
            </div>
            <div class="tools">
              <div
                class="color"
                v-for="(color, i) in colors"
                :style="{background: color}"
                v-bind:key="i"
                @click="selectColor(color)"
              ></div>
            </div>
            <button class="btn-go" v-if="isFinished" @click="setTask(null)">Завершить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sun from "./images/Sun.svg";
import Pottis from "./libraries/pottis.js";
// import {generateThings} from "../assets/generateThings";

import RedApple from "./images/RedApple.svg";
import Banana from "./images/Bananas.svg";
import EmptyApple from "./images/EmptyApple.svg";
import Fish from "./images/Fish.svg";
import { mapMutations } from "vuex";

export default {
  name: "MainContent",
  data: function() {
    return {
      pottis: null,
      page: 0,
      forms: [],
      colors: ["blue", "yellow", "green", "red", "black", "brown"],
      isFinished: false
    };
  },
  mounted() {
    this.drawSun();
  },
  methods: {
    changePage(page) {
      this.page = page;
      page == 1 ? this.drawFruits() : this.drawApples();
    },
    drawFruits() {
      this.pottis = null;
      this.forms = [];

      let svg = document.getElementById("fruits");
      this.pottis = new Pottis(svg);
      this.pottis.importSVG(RedApple, "fruits1");
      this.pottis.importSVG(Banana, "fruits2");

      let data = this.generateThings("fruits", 2, this.pottis, this.forms);
      this.forms = data[0];
      this.pottis = data[1];
    },
    drawApples() {
      this.pottis = null;
      this.forms = [];
      let svg = document.getElementById("apples");
      this.pottis = new Pottis(svg);

      this.pottis.importSVG(EmptyApple, "apples1");
      this.pottis.importSVG(Fish, "apples2");
      this.pottis.importSVG(Banana, "apples3");
      let data = this.generateThings("apples", 3, this.pottis, this.forms);
      this.forms = data[0];
      this.pottis = data[1];
    },
    drawSun() {
      let svg = document.getElementById("sun-block");
      this.pottis = new Pottis(svg);
      this.pottis.importSVG(Sun, "Sun1");
      let cls = "ic-yellow";
      this.draw("Sun" + 1, 0, 0, 0.5, cls);
    },
    draw(type, x, y, scale = 0.2, cls = "ic-1") {
      let obj = this.pottis.use(type, type, x, y, cls);
      this.forms.push(obj);
      this.pottis.scale(obj, scale);
    },
    selectColor(color) {
      this.currentColor = color;
    },
    randomInt(min, max) {
      return min + Math.floor((max - min) * Math.random());
    },
    generateThings(name, count, pottis, forms) {
      console.log("tut");
      for (let i = 0; i < count; i++) {
        this.drawi(
          pottis,
          forms,
          name + (i + 1),
          50 + (name == "fruits" ? 300 : 150) * i,
          100 + this.randomInt(-50, 50),
          name == "fruits" ? 1 : 0.2
        );
      }
      return [forms, pottis];
    },
    drawi(pottis, forms, type, x, y, scale = 0.2) {
      let obj = pottis.use(type, type, x, y);
      forms.push(obj);
      pottis.scale(obj, scale);
      pottis.addClick(obj, this.appleClicked);
      // pottis.addDrag(obj);
      // index++
    },

    appleClicked(element, e) {
      e;
      if (this.currentColor == null) {
        return alert("Выберите цвет");
      }
      element.className.baseVal = "ic-" + this.currentColor;
      if (element.id.includes("apples1")) {
        this.isFinished = true;
        alert("Яблочко окрашено желтым цветом. Нажмите Далее, чтобы закончить задание.");
      }
    },
    setTask(item) {
      this.setOpenTask(item);
      this.setFinishedTask(1);
    },
    ...mapMutations(["setOpenTask", "setFinishedTask"])
  }
};
</script>

<style >
.btn-go {
  height: 100px;
  align-self: center;
  width: 150px;
  border-right-width: 2px;
  border-right-style: solid;
  background-color: #fe677a;
  font-family: "Ubuntu Condensed", Calibri, "AppleGothic", "MgOpen Modata",
    sans-serif;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  color: white;
  border-width: 0;
  border-radius: 5px;
  margin-left: 10px;
}
</style>