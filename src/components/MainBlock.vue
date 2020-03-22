<template>
  <div class='f' v-if="openTask == null">
    <middle-block></middle-block>
    <!-- <tasks></tasks>  -->
    <color-things></color-things>
  </div>
  <div v-else>
      
  </div>
</template>

<script>
import MiddleBlock from "./MiddleBlock";
// import ColorThings from "./ColorThings";
// import ColorThings from "./ColorFish";
// import ColorThings from "./PickColor";
import ColorThings from "./Moving";

export default {
  name: "MainBlock",
  components: {
    MiddleBlock,
    ColorThings
  },

  computed: {
    openTask() {
        return this.$store.getters.openTask;
    },
  },
};
</script>