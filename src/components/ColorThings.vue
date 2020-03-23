<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task">
          <div class="task-title">Покрась все яблоки в желтый цвет</div>
          <div class="task-body">
            <div class="svg">
              <svg
                id="tutorial"
                version="1.1"
                width="500"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />class="ic-1" xlink:href="#EmptyApple1" x="0" y="0" /> -->
                <!-- <use xlink:href="#GreenApple" x="15" y="15" transform=" scale(0.2, 0.2)"/> -->
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Pottis from "./libraries/pottis.js";
// import RedApple from "./images/RedApple.svg";
import GreenApple from "./images/GreenApple.svg";
import EmptyApple from "./images/EmptyApple.svg";
import Fish from "./images/Fish.svg";
import Sun from "./images/Sun.svg";
import Cat from "./images/Cat.svg";
import Dress from "./images/Dress.svg";
import Banana from "./images/Bananas.svg";
import Bird from "./images/Bird.svg";
import Hen from "./images/Hen.svg";

export default {
  name: "Tasks",
  data: function() {
    return {
      pottis: null,
      index: 0,
      forms: [],
      colors: ["blue", "yellow", "green", "red", "black", "brown"],
      currentColor: null,
      countYellowApples: []
    };
  },
  mounted() {
    Fish;
    Sun;
    Cat;
    Dress;
    Banana;
    Bird;

    var svg = document.getElementById("tutorial");
    this.pottis = new Pottis(svg);
    this.pottis.importSVG(EmptyApple, "EmptyApple1");
    this.pottis.importSVG(EmptyApple, "EmptyApple2");
    this.pottis.importSVG(EmptyApple, "EmptyApple3");
    this.pottis.importSVG(EmptyApple, "EmptyApple");
    this.pottis.importSVG(GreenApple, "GreenApple");
    this.pottis.importSVG(Fish, "Fish");
    this.pottis.importSVG(Sun, "Sun");
    this.pottis.importSVG(Cat, "Cat");
    this.pottis.importSVG(Dress, "Dress");
    this.pottis.importSVG(Banana, "Banana");
    this.pottis.importSVG(Bird, "Bird");
    this.pottis.importSVG(Hen, "Hen");

    this.generateThings(3);
  },
  methods: {
    selectColor(color) {
      console.log(color);
      this.currentColor = color;
    },
    generateThings(count) {
      for (let i = 0; i < count; i++) {
        this.draw("EmptyApple" + (i + 1), 50 + 150 * i, 100);
      }
    },
    draw(type, x, y, scale = 0.2) {
      let obj = this.pottis.use(type, type, x, y);
      this.forms.push(obj);
      console.log(type, obj, obj.contentDocument);
      this.pottis.scale(obj, scale);
      this.pottis.addClick(obj, this.appleClicked);
      this.pottis.addDrag(obj);
      this.index++;
    },
    setTask(item) {
      this.setOpenTask(item);
    },
    appleClicked(element, e) {
      e;
      if (this.currentColor == null) {
        return alert("Выберите цвет");
      }
      element.className.baseVal = "ic-" + this.currentColor;

      if (this.currentColor == "yellow") {
        this.countYellowApples.push({ id: element.id, isYellow: true });
      } else {
        this.countYellowApples.forEach(el => {
          if(el.id == element.id && el.isYellow){
            el.isYellow = false
          }
        })
      }
      let countY = 0;
      this.countYellowApples.forEach(el => {
        if(el.isYellow){
            countY ++;
            if(countY == 3){
              this.setSubTask(2);
            }
        } else {
          return;
        }
      });
    },
    ...mapMutations(["setOpenTask", "setSubTask"])
  }
};
</script>

<style lang="scss">
// use.ic-1 {
//   fill: skyblue !important;
// }
// use.ic-2 {
//   fill: red !important;
// }

// use.ic-blue {
//   fill: blue !important;
// }
// use.ic-yellow {
//   fill: yellow !important;
// }
// use.ic-green {
//   fill: green !important;
// }
// use.ic-red {
//   fill: red !important;
// }
// use.ic-black {
//   fill: black !important;
// }
// use.ic-brown {
//   fill: brown !important;
// }
// #tutorial {
//   border: 1px solid black;
//   background-color: #fdf7eb;
// }
</style>