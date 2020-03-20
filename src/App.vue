<template>
  <div id="app">
    <Header></Header>
    <main-block></main-block>
  </div>
</template>

<script>
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";

export default {
  name: "App",
  components: {
    Header,
    MainBlock
  }
};
</script>

<style>
#app {
  font-family: "Ubuntu Condensed", Calibri, "AppleGothic", "MgOpen Modata",
    sans-serif;
  font-size: 40px;
  line-height: 46px;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
