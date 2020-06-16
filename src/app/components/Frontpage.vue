<template>
  <section class="frontpage">
    <article>
      <fga-advice />
    </article>
    <!-- <footer class="frontpage__footer frontpage__footer_hoverable">
      <fga-top-sites v-if="isTopSitesEnabled" />
    </footer> -->
  </section>
</template>

<script>
import FgaAdvice from './Advice';
// import FgaTopSites from './TopSites';

export default {
  name: 'FgaFrontpage',
  components: {
    FgaAdvice,
    // FgaTopSites,
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    advice() {
      return this.$store.getters.activeAdvice;
    },
    // isTopSitesEnabled() {
    //   return this.$store.getters.optionByAlias('top-sites');
    // },
  },
  methods: {
    nextAdvice() {
      this.$store.dispatch('NEXT_ADVICE');
    },
  },
};
</script>

<style lang="scss" scoped>
.frontpage {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.frontpage__footer {
  position: absolute;
  bottom: 0;
  height: 15vh;
  width: 100%;
  z-index: 2;
}

.frontpage__footer_hoverable:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.3));
  opacity: 0;
  transition: opacity 0.6s ease;
}

.frontpage__footer_hoverable:hover:after {
  opacity: 1;
}

.frontpage__control {
  position: absolute;
  bottom: 36px;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  color: currentColor;
  transition: opacity 0.3s ease;
  user-select: none;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .frontpage__control {
    bottom: 16px;
  }
}

.frontpage__control:hover {
  opacity: 0.8;
}

.frontpage__control_prev {
  left: 40px;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .frontpage__control_prev {
    left: 20px;
  }
}

.frontpage__control_next {
  right: 40px;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .frontpage__control_next {
    right: 20px;
  }
}

.frontpage_medicine {
  background-color: #eee;
}

.frontpage_driving {
  background-color: #ffb902;
}

.frontpage_driving .advice__text {
  border: 10px solid currentColor;
  padding: 6rem 8rem;
  border-radius: 2rem;
}

.frontpage_driving .dash {
  margin-right: 0;
}

.frontpage_text .advice__text {
  border: 3rem solid #da570f;
  padding: 4rem 8rem;
}

.frontpage_text .dash {
  margin-right: 0;
}
</style>
