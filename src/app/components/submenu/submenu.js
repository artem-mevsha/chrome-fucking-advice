import settings from '../submenuSettings/submenuSettings.vue';
import tags from '../submenuTags/submenuTags.vue';

export default {
  name: 'submenu',

  components: {
    settings,
    tags
  },

  computed: {
    menuItems() {
      return this.$store.state.menu.menuItems;
    },

    social() {
      return this.$store.state.menu.social;
    },

    activeSubmenu() {
      return this.$store.state.menu.activeSubmenu;
    }
  },

  methods: {
    showSubmenu(slug) {
      this.$store.dispatch('SHOW_SUBMENU', slug);
    }
  }
};
