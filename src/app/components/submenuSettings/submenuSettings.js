import {mapState} from 'vuex';
import FgaSettingsCheckbox from '../settingsCheckbox/settingsCheckbox.vue';

export default {
  name: 'FgaSubmenuSettings',

  components: {
    FgaSettingsCheckbox
  },

  computed: {
    ...mapState({
      options: state => state.settings.options
    }),

    adviceUrl() {
      return this.$store.getters.adviceUrl;
    }
  }
};
