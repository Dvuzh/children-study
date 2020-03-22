<template>
  <div class="all-tasks">
    <div class="tasks-block">
      <div class="task-block">
        <div class="task">
          <div class="task-title">Задание 1</div>
          <div class="task-body">
            <svg id="tutorial" version="1.1" width="700" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                
              </defs>

               <!-- <use xlink:href="#GreenApple" x="15" y="15" transform=" scale(0.2, 0.2)"/> -->
            </svg>
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
    this.pottis.importSVG(RedApple, "RedApple");
    this.pottis.importSVG(GreenApple, "GreenApple");
    this.pottis.importSVG(Fish, "Fish");
    this.pottis.importSVG(Sun, "Sun");
    this.pottis.importSVG(Cat, "Cat");
    this.pottis.importSVG(Dress, "Dress");
    this.pottis.importSVG(Banana, "Banana");
    this.pottis.importSVG(Bird, "Bird");
    this.pottis.importSVG(Hen, "Hen");
    var apple_ = this.pottis.use("RedApple", "first_apple", 100, 100);
    var apple2_ = this.pottis.use("GreenApple", "first_apple2", 100, 100);
    var emptyApple = this.pottis.use("EmptyApple", "empty_apple", 80, 100);

    this.draw("Fish", 80, 100);
    this.draw("Sun", 10, 10);
    this.draw("Cat", 100, 10);
    this.draw("Dress", 100, 210, 0.9);
    this.draw("Banana", 100, 50, 1);
    this.draw("Bird", 100, 50);
    // this.draw("Hen", 200, 50);

    this.pottis.scale(apple2_, 0.2);
    this.pottis.scale(emptyApple, 0.2);
    // // this.pottis.scaleAdd(0.5,0.5)
    // console.log(apple_)
		this.pottis.addClick(apple_, this.appleClicked);
    this.pottis.addDrag(apple_);
    this.pottis.addClick(apple2_, this.appleClicked);
		this.pottis.addDrag(apple2_);
    this.pottis.addClick(emptyApple, this.appleClicked);
		this.pottis.addDrag(emptyApple);
  },
  methods:{
      draw(type, x, y, scale = 0.2) {
        let obj = this.pottis.use(type, type, x, y);
        this.pottis.scale(obj, scale);
        this.pottis.addClick(obj, this.appleClicked);
        this.pottis.addDrag(obj);
      },
      setTask(item){
          this.setOpenTask(item);
      },
      appleClicked(element, e) {
        console.log(e)
        console.log(element.id)
        // element.id
        // this.pottis.rotateAdd(this, 45);
        // this.pottis.scale(this, 0.5);
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
</style>