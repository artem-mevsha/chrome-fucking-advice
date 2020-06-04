<template>
  <div id="fga" class="layout ui--white">
    <fga-splashscreen v-if="isLoading" />
    <div v-if="!isLoading" class="layout__appready">
      <fga-header />
      <fga-frontpage class="layout__view" />
    </div>
  </div>
</template>

<script>
import getMessage from './common/get-message';
import FgaSplashscreen from './components/Splashscreen';
import FgaHeader from './components/UI';
import FgaFrontpage from './components/Frontpage';

export default {
  name: 'Fga',
  beforeCreate() {
    document.title = getMessage('newtab', 'New Tab');
  },
  created() {
    this.$store.dispatch('FETCH_ALL_DATA');
    this.$store.dispatch('SYNC_SETTINGS');
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  components: {
    FgaSplashscreen,
    FgaHeader,
    FgaFrontpage,
  },
};
</script>

<style lang="scss">
@import 'scss/fonts';
@import 'scss/variables';
@import 'scss/normalize';
@import 'scss/animations';

body,
html {
  height: 100%;
  background: $color-black;
  margin: 0;
  font-family: $font-bebas;
  font-weight: 300;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
}

@media only screen and (max-height: 800px) {
  html,
  body {
    font-size: 9px;
  }
}

@media only screen and (max-height: 700px) {
  html,
  body {
    font-size: 8px;
  }
}

@media only screen and (max-height: 500px) {
  .advice__text {
    font-size: 8rem;
  }
}

@media only screen and (max-width: 768px) {
  html,
  body {
    font-size: 9px;
  }
}

@media only screen and (max-width: 480px) {
  html,
  body {
    font-size: 8px;
  }
}

.layout {
  position: relative;
  min-height: 100%;
  background-color: #fff;
  color: #000;
  transition: background-color 0.3s ease;
}

.layout__appready,
.layout__view {
  height: 100%;
  min-height: 100%;
}

.layout.ui--white {
  background-color: #000;
  color: #fff;
}

#fga {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-white;
}
</style>
