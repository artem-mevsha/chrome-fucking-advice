import advice from '../advice/advice.vue';
import FgaTopSites from '../topSites/topSites.vue';

export default {
  name: 'FgaFrontpage',

  components: {
    advice,
    FgaTopSites
  },

  computed: {
    error() {
      return this.$store.state.error;
    },

    advice() {
      return this.$store.getters.activeAdvice;
    },

    isTopSitesEnabled() {
      return this.$store.getters.optionByAlias('top-sites');
    }
  },

  methods: {
    nextAdvice() {
      this.$store.dispatch('NEXT_ADVICE');
    }
  }
};