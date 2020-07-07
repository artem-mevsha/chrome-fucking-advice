import {mapState} from 'vuex';

import {BASE_URL} from '../../common/config';
import FgaSubmenu from '../submenu/submenu.vue';

export default {
  name: 'FgaUI',

  components: {
    FgaSubmenu,
  },

  data() {
    return {
      baseUrl: BASE_URL,
    };
  },

  computed: {
    ...mapState({
      activeTag: state => state.advices.activeTag,
      isMenuOpened: state => state.menu.isMenuOpened
    }),

    isLogoEnabled() {
      return this.$store.getters.optionByAlias('logo');
    }
  },

  methods: {
    toggleMenu() {
      this.$store.dispatch('TOGGLE_MENU');
    },

    resetTag() {
      this.$store.dispatch('CHOOSE_TAG', null);

      if (this.isMenuOpened) {
        this.$store.dispatch('TOGGLE_MENU');
      }
    }
  }
};
