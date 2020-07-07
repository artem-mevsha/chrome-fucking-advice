import getMessage from '../../common/get-message';
import splashscreen from '../splashscreen/splashscreen.vue';
import ui from '../ui/ui.vue';
import frontpage from '../frontpage/frontpage.vue';

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
    }
  },

  components: {
    splashscreen,
    ui,
    frontpage
  }
};
