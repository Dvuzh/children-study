<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task">
          <div class="task-title">Выберите желтые объекты</div>
          <div class="task-body">
            <div class="svg">
              <svg id="tutorial" version="1.1" width="500" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                
              </defs>
               <!-- <use xlink:href="#GreenApple" x="15" y="15" transform=" scale(0.2, 0.2)"/> -->
            </svg>
            </div>
            <div class="tools">
              
            </div>
            
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Pottis  from "./libraries/pottis.js";
// import GreenApple  from "./images/GreenApple.svg";
// import EmptyApple  from "./images/EmptyApple.svg";
// import Fish  from "./images/Fish.svg";
import Sun  from "./images/Sun.svg";
import Circle  from "./images/Circle.svg";

export default {
  name: "Tasks",
  data: function() {
    return {
      pottis: null,
      index: 0,
      forms: [],
      colors: [
        "blue",
        "yellow",
        "green",
        "red",
        "black",
        "brown"
      ],
      circle: {
        x: 0, y: 0
      },
      rect: {
        x: 0, y: 0,
        w: 30, h: 20
      },
      circles: [
        {x: 100, y: 120},
        {x: 355, y: 160},
        {x: 270, y: 300},
      ],
      rects: [
        {x: 230, y: 160},        
      ],
      currentColor: null,
      curentRect: {},
      curentCircle: {},
    };
  },
  mounted() {

    var svg = document.getElementById("tutorial");
    this.pottis = new Pottis(svg);
    this.pottis.importSVG(Circle, "Circle");
    this.pottis.importSVG(Sun, "Sun1");
 
    this.generateThings(1)
  },
  methods:{
      randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
      },
      randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
      },
      randomCircle() {
        return this.circles[Math.floor(Math.random() * this.circles.length)]
      },
      selectColor(color) {
        console.log(color)
        this.currentColor = color
      },
      generateThings(count) {
        for(let i = 0; i < count; i++) {
          let cls = 'ic-yellow';
          this.draw("Sun" + (i + 1), 50 + 150 * i, 1, 0.5, cls);
          this.curentRect.x = 230 + this.randomInt(-20, 20)
          this.curentRect.y = 160 + this.randomInt(-20, 20)
          let rect = this.pottis.shape("rect", { x: this.curentRect.x, y: this.curentRect.y, width: 50, height: 40, fill: "blue" });
          this.curentCircle = this.randomCircle();
          let circle = this.pottis.shape("circle", { cx: this.curentCircle.x, cy: this.curentCircle.y, r: 20, fill: "blue" });
          this.pottis.addDrop(circle, this.wheelDropped);
          this.pottis.addDrop(rect, this.wheelDropped);


          let rect2 = this.pottis.shape("rect", { x: 10, y: 10, width: 50, height: 40, fill: "yellow" });          
          let circle2 = this.pottis.shape("circle", { cx: 70, cy: 10, r: 20, fill: "yellow" });


          this.pottis.addDrag(rect2);
          this.pottis.addDrag(circle2);
        }
      },
      wheelDropped(receiver, dropped) {
        this.pottis.removeDrag(dropped);
      },
      draw(type, x, y, scale = 0.2, cls = 'ic-1') {
        let obj = this.pottis.use(type, type, x, y, cls);
        this.forms.push(obj)
        console.log(type, obj, obj.contentDocument)
        this.pottis.scale(obj, scale);
        this.pottis.addClick(obj, this.appleClicked);
        // this.pottis.addDrag(obj);
        this.index++
      },
      setTask(item){
          this.setOpenTask(item);
      },
      appleClicked(element, e) {
        e
        if (this.currentColor == null) {
          return alert("Выберите цвет")
        }
        console.log(element)
        console.log(element.className)
        element.className.baseVal = "ic-" + this.currentColor
        console.log(element.className)
        // if (element.id.includes("EmptyApple")) {
        //     console.log(element);
        //     console.log(element.childNodes);         
        // }
        
      },
        ...mapMutations(["setOpenTask"])
  }
};
</script>

<style lang="scss" scoped>
.task-body {
  display: flex;
  flex-direction: row;
}
.tools {
  min-width: 60px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

}
.color {
  min-width: 20px;
  height: 20px;
}
</style>

<style lang="scss">
.tasks-block {
  padding-top: 100px;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(2, 50%); */
  grid-row-gap: 100px;
  background-image: url(http://cheep-cheep.ru/wp-content/uploads/2018/04/cipaegg_web_06.png);
}
.task-block {
  width: 40%;
  justify-self: center;
  background-color: #dbdbdb;
  min-height: 145px;
  height: 400px;
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
  text-align: center;
  color: rgb(104, 104, 104);
}

.task {
  width: 80%;
  height: 80%; 
}

use.ic-1 {
  fill: skyblue !important;
}
use.ic-2 {
  fill: red !important;
}

use.ic-blue {
  fill: blue !important;
}
use.ic-yellow {
  fill: yellow !important;
}
use.ic-green {
  fill: green !important;
}
use.ic-red {
  fill: red !important;
}
use.ic-black {
  fill: black !important;
}
use.ic-brown {
  fill: brown !important;
}
#tutorial {
  border: 1px solid black;
}
</style>