import {mapState} from 'vuex';

import externalUrlFilter from '../../common/external-url.filter';
import FgaAdviceLink from '../adviceLink/adviceLink.vue';

export default {
  name: 'FgaAdvice',

  components: {
    FgaAdviceLink,
  },

  filters: {
    externalUrlFilter,
  },

  computed: {
    ...mapState({
      error: (state) => state.error,
      image: (state) => state.advices.activeImage,
      activeTag: (state) => state.advices.activeTag,
    }),

    isTagsEnabled() {
      return this.$store.getters.optionByAlias('tags');
    },

    advice() {
      return this.$store.getters.activeAdvice;
    }
  },

  methods: {
    checkConnection() {
      this.$store.dispatch('FETCH_ALL_DATA');
    },

    nextAdvice() {
      this.$store.dispatch('NEXT_ADVICE');
    },

    chooseTag(tagAlias) {
      this.$store.dispatch('CHOOSE_TAG', tagAlias);
    },

    isTagActive(tagAlias) {
      const { activeTag } = this;
      if (activeTag && activeTag.alias) {
        return activeTag.alias === tagAlias;
      }
      return false;
    }
  }
};
