<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task">
          <div class="task-title">Выберите один желтый объект</div>
          <div class="task-body">
            <div class="svg">
              <svg id="tutorial" version="1.1" width="500" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                
              </defs>
               <!-- <use xlink:href="#GreenApple" x="15" y="15" transform=" scale(0.2, 0.2)"/> -->
            </svg>
            </div>
            <!-- <div class="tools">
              
            </div> -->
            
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Pottis  from "./libraries/pottis.js";
import RedApple  from "./images/RedApple.svg";
import GreenApple  from "./images/GreenApple.svg";
import EmptyApple  from "./images/EmptyApple.svg";
import Fish  from "./images/Fish.svg";
import Sun  from "./images/Sun.svg";
import Cat  from "./images/Cat.svg";
import Dress  from "./images/Dress.svg";
import Banana  from "./images/Bananas.svg";
import Bird  from "./images/Bird.svg";
import Hen  from "./images/Hen.svg";

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
      currentColor: null,
      usedYellowColor: false
    };
  },
  mounted() {
    Fish
    Sun
    Cat
    Dress
    Banana
    Bird

    var svg = document.getElementById("tutorial");
    this.pottis = new Pottis(svg);
    this.pottis.importSVG(EmptyApple, "EmptyApple1");
    this.pottis.importSVG(EmptyApple, "EmptyApple2");
    this.pottis.importSVG(EmptyApple, "EmptyApple3");
    this.pottis.importSVG(RedApple, "RedApple");
    this.pottis.importSVG(GreenApple, "GreenApple");
    this.pottis.importSVG(Fish, "Fish1");
    this.pottis.importSVG(Fish, "Fish2");
    this.pottis.importSVG(Fish, "Fish3");
    this.pottis.importSVG(Sun, "Sun");
    this.pottis.importSVG(Cat, "Cat");
    this.pottis.importSVG(Dress, "Dress");
    this.pottis.importSVG(Banana, "Banana");
    this.pottis.importSVG(Bird, "Bird");
    this.pottis.importSVG(Hen, "Hen");
 
    this.generateThings(3)
  },
  methods:{
      randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
      },
      randomColor() {
        let randColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        if (!this.usedYellowColor) {
          this.usedYellowColor = true;
          randColor = "yellow"
        }
        // if(randColor == "yellow"){
        //   this.usedYellowColor = true;
        // }
        return randColor;
      },
      selectColor(color) {
        console.log(color)
        this.currentColor = color
      },
      generateThings(count) {
        // let isYellow = false;
        for(let i = 0; i < count; i++) {
          let cls = 'ic-' + this.randomColor();
          // isYellow = (isYellow || cls == 'ic-yellow') ? true: false
          this.draw("Fish" + (i + 1), 50 + 150 * i, 200 + (this.randomInt(-50, 50)), 0.1, cls);
          cls = 'ic-' + this.randomColor();
          this.draw("EmptyApple" + (i + 1), 50 + 150 * i, 100 + (this.randomInt(-50, 50)), 0.1, cls);
        }
      },
      draw(type, x, y, scale = 0.2, cls = 'ic-1') {
        let obj = this.pottis.use(type, type, x, y, cls);
        this.forms.push(obj)
        console.log(type, obj, obj.contentDocument)
        this.pottis.scale(obj, scale);
        this.pottis.addClick(obj, this.appleClicked);
        this.pottis.addDrag(obj);
        this.index++
      },
      setTask(item){
          this.setOpenTask(item);
      },
      appleClicked(element, e) {
        e
        // if (this.currentColor == null) {
        //   return alert("Выберите цвет")
        // }
        console.log(element)
        console.log(element.className)
        // element.className.baseVal = "ic-" + this.currentColor
        console.log(element.className)
        if (element.className.baseVal.includes("ic-yellow")) {
          this.setSubTask(3);
            // console.log(element);
            // console.log(element.childNodes);         
        }
        
      },
        ...mapMutations(["setOpenTask", "setSubTask"])
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