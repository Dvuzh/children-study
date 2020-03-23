<template>
  <div class="f" v-if="openTask == null">
    <middle-block></middle-block>
    <tasks></tasks>
  </div>
  <div v-else-if="openTask == 1">
    <main-content></main-content>
  </div>
  <div v-else-if="openTask == 2">
    <color-apple v-if="subTask == 1"></color-apple>
    <pick-color v-if="subTask == 2"></pick-color>

     <moving v-if="subTask == 3"></moving>
  </div>
  <!-- <div v-else-if="openTask == 3">
    <color-fish></color-fish>
  </div>-->
</template>

<script>
import MiddleBlock from "./MiddleBlock";
import ColorApple from "./ColorThings";
// import ColorFish from "./ColorFish";
import MainContent from "./MainContent";
import PickColor from "./PickColor";
import Moving from "./Moving";
import Tasks from "./Tasks";

export default {
  name: "MainBlock",
  components: {
    MiddleBlock,
    ColorApple,
    PickColor,
    MainContent,
    Tasks,
    Moving
  },

  computed: {
    openTask() {
      return this.$store.getters.openTask;
    },
    subTask(){
      return this.$store.getters.subTask;
    }
  }
};
</script>