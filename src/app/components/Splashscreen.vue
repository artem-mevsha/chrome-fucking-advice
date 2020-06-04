<template>
  <section class="splashscreen">
    <div class="splashscreen__aligner">
      <figure class="splashscreen__logo">
        <i class="box box-1"></i>
        <i class="box box-2"></i>
        <i class="box box-3"></i>
        <i class="box box-4"></i>
        <b class="splashscreen__fuck">#%!</b>
      </figure>
      <span class="splashscreen__text">{{ loadingText }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FgaSplashscreen',
  data () {
    return {
      loadingText: 'Идёт блять загрузка'
    }
  }
}
</script>

<style lang="scss" scoped>
*,
::after,
::before {
  box-sizing: border-box
}

body,
html {
  height: 100%
}

html {
  line-height: 1.2
}

body {
  background: #000;
  margin: 0;
  font-family: Bebas Neue;
  font-weight: 300;
  text-transform: uppercase
}

.layout {
  position: relative;
  min-height: 100%;
  background-color: #000;
  color: #fff
}

.splashscreen {
  height: 100vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splashscreen__aligner {
  display: block;
}

.splashscreen__logo {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto
}

.splashscreen__text {
  font-family: 'Arial Narrow', Arial, sans-serif;
  text-transform: uppercase;
  display: block;
  padding-top: 24px;
  text-align: center;
  font-size: 24px
}

.box {
  width: 100px;
  height: 100px;
  position: absolute
}

.box-1 {
  background-color: #f09;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-animation: box-1_move 3s ease infinite;
  animation: box-1_move 3s ease infinite
}

.box-2 {
  background-color: #0f0;
  top: 0;
  right: 0;
  -webkit-animation: box-2_move 3s ease infinite;
  animation: box-2_move 3s ease infinite
}

.box-3 {
  background-color: #70f;
  bottom: 0;
  right: 0;
  z-index: 1;
  -webkit-animation: box-3_move 3s ease infinite;
  animation: box-3_move 3s ease infinite
}

.box-4 {
  background-color: #fe0;
  bottom: 0;
  left: 0;
  -webkit-animation: box-4_move 3s ease infinite;
  animation: box-4_move 3s ease infinite
}

.splashscreen__fuck {
  display: block;
  width: 130px;
  height: 130px;
  background: #000;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -65px 0 0 -65px;
  line-height: 140px;
  font-size: 40px;
  font-family: Arial, sans-serif
}

@-webkit-keyframes box-1_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px)
  }
  50% {
    -webkit-transform: translate(100px, 100px);
    transform: translate(100px, 100px)
  }
  75% {
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0)
  }
}

@keyframes box-1_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px)
  }
  50% {
    -webkit-transform: translate(100px, 100px);
    transform: translate(100px, 100px)
  }
  75% {
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0)
  }
}

@-webkit-keyframes box-2_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0)
  }
  50% {
    -webkit-transform: translate(-100px, 100px);
    transform: translate(-100px, 100px)
  }
  75% {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px)
  }
}

@keyframes box-2_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0)
  }
  50% {
    -webkit-transform: translate(-100px, 100px);
    transform: translate(-100px, 100px)
  }
  75% {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px)
  }
}

@-webkit-keyframes box-3_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(0, -100px);
    transform: translate(0, -100px)
  }
  50% {
    -webkit-transform: translate(-100px, -100px);
    transform: translate(-100px, -100px)
  }
  75% {
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0)
  }
}

@keyframes box-3_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(0, -100px);
    transform: translate(0, -100px)
  }
  50% {
    -webkit-transform: translate(-100px, -100px);
    transform: translate(-100px, -100px)
  }
  75% {
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0)
  }
}

@-webkit-keyframes box-4_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0)
  }
  50% {
    -webkit-transform: translate(100px, -100px);
    transform: translate(100px, -100px)
  }
  75% {
    -webkit-transform: translate(0, -100px);
    transform: translate(0, -100px)
  }
}

@keyframes box-4_move {
  0%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  25% {
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0)
  }
  50% {
    -webkit-transform: translate(100px, -100px);
    transform: translate(100px, -100px)
  }
  75% {
    -webkit-transform: translate(0, -100px);
    transform: translate(0, -100px)
  }
}
</style>
