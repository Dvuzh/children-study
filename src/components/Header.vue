<template>
  <header id="header">
    <div class="header_mid">
    </div>
    <!-- <div class="header_mid" :style="{'height': '90px'}">
      <div class="header_mid_outer">
        <div class="header_mid_inner">
          <div class="logo_wrap" :style="{'color': '#64d6cc'}">Shelp</div>
        </div>
      </div>
    </div> -->

    <div class="navigation-menu">
      <ul class="navigation">
        <li :class="{ active : active_el == 0 }" class="menu-tasks" @click="setTask(null)">Задания</li>
      </ul>
    </div>
  </header>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  data: function() {
    return {
      active_el: 0
    };
  },
  methods: {
    setTask(item) {
      this.setOpenTask(item);
    },
    ...mapMutations(["setOpenTask"])
  }
};
</script>

<style type="text/css">
#header {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
}
.navigation-menu {
  display: flex;
  justify-content: flex-end;
  padding-right: 400px;
  padding-left: 400px;
  height: 80px;
}

.navigation li {
  font-family: "Ubuntu Condensed", Calibri, "AppleGothic", "MgOpen Modata",
    sans-serif;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  color: white;
}

.navigation {
  display: flex;
  height: 50px;
}

#header .header_mid:before,
#header .navigation-menu:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 16px;
  top: 100%;
  background-size: 14px 100%;
  background-position: 50%;
  z-index: 2;
}
#header .header_mid:after,
#header .navigation-menu:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 24px;
  top: 100%;
  background-size: 14px 100%;
  background-position: 50%;
  z-index: 1;
}

.header_mid:before {
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, #ffffff),
    color-stop(0.25, #ffffff)
  );
  background-image: linear-gradient(135deg, #ffffff 25%, transparent 25%),
    linear-gradient(225deg, #ffffff 25%, transparent 25%);
}

.header_mid:after {
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, #eaeaea),
    color-stop(0.25, #eaeaea)
  );
  background-image: linear-gradient(135deg, #eaeaea 25%, transparent 25%),
    linear-gradient(225deg, #eaeaea 25%, transparent 25%);
}

.navigation-menu:after {
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, #f2f2f2),
    color-stop(0.25, #f2f2f2)
  );
  background-image: linear-gradient(135deg, #f2f2f2 25%, transparent 25%),
    linear-gradient(225deg, #f2f2f2 25%, transparent 25%);
}

.navigation-menu:before {
  background-image: -webkit-gradient(
    linear,
    0 0,
    300% 100%,
    color-stop(0.25, #ffffff),
    color-stop(0.25, #ffffff)
  );
  background-image: linear-gradient(135deg, #ffffff 25%, transparent 25%),
    linear-gradient(225deg, #ffffff 25%, transparent 25%);
}

.navigation .active {
  background-color: #fe677a;
}

.navigation li.active:after {
  background-color: #fe677a;
}

.navigation > li:after {
    z-index: 3;
  content: "";
  height: 34px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -20px;
  border-radius: 0 0 50% 50% / 17px 17px 17px 17px;
  -moz-border-radius: 0 0 50% 50% / 17px 17px 17px 17px;
  -webkit-border-radius: 0 0 50% 50% / 17px 17px 17px 17px;
}

.navigation > li {
  position: relative;
  padding: 0 18px;
  height: 100%;
  border-right-width: 2px;
  border-right-style: solid;
}

.navigation > li:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

.navigation > li:after {
  -webkit-box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.05);
  /* box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.05); */
}

.menu-tasks {
  cursor: pointer;
}
</style>