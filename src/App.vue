<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header> </Header>
    <middle-block></middle-block>
    <tasks></tasks>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import MiddleBlock from './components/MiddleBlock'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    MiddleBlock,
    Tasks
  }
}
</script>

<style>
#app {
 font-family: 'Ubuntu Condensed', Calibri, 'AppleGothic', 'MgOpen Modata', sans-serif;
    font-size: 40px;
    line-height: 46px;
    font-weight: bold;
    font-style: normal;
    text-transform: uppercase;
    text-decoration: none;
}
</style>
