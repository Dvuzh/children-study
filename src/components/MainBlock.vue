<template>
  <div class='f' v-if="openTask == null">
    <middle-block></middle-block>
    <!-- <tasks></tasks>  -->
    <task-one></task-one>    
  </div>
  <div v-else>
      
  </div>
</template>

<script>
import MiddleBlock from "./MiddleBlock";
import TaskOne from "./TaskOne";

export default {
  name: "MainBlock",
  components: {
    MiddleBlock,
    TaskOne
  },

  computed: {
    openTask() {
        return this.$store.getters.openTask;
    },
  },
};
</script>