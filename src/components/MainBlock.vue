<template>
  <div class='f' v-if="openTask == null">
    <middle-block></middle-block>
    <tasks></tasks>    
  </div>
  <div v-else>
      
  </div>
</template>

<script>
import MiddleBlock from "./MiddleBlock";
import Tasks from "./Tasks";

export default {
  name: "MainBlock",
  components: {
    MiddleBlock,
    Tasks
  },

  computed: {
    openTask() {
        return this.$store.getters.openTask;
    },
  },
};
</script>