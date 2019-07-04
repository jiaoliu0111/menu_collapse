<template>
  <div id="app">
    <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
    云想衣裳花想容，春风福建露华浓，若非群玉山头见，会向瑶台月下逢……
      </vue-particles>
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  /* background: blue; */
  /* background: url(../../assets/images/tang.jpg) no-repeat; */
}
.lizi {
  background: url(../../assets/images/tang.jpg) no-repeat;
}
body {
  background:navy;
}
</style>
