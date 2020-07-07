import {mapState} from 'vuex';

export default {
  name: 'FgaSubmenuTags',
  data() {
    return {
      tagCount: ''
    };
  },

  computed: {
    ...mapState({
      activeTag: state => state.advices.activeTag,
      tags: state => state.advices.tags
    }),
  },

  methods: {
    chooseTag(tagAlias) {
      if (this.activeTag && this.activeTag.alias === tagAlias) {
        return;
      }

      this.$store.dispatch('CHOOSE_TAG', tagAlias);
      this.$store.dispatch('TOGGLE_MENU');
    },

    isTagActive(tagAlias) {
      if (this.activeTag && this.activeTag.alias === tagAlias) {
        return true;
      }
      return false;
    },

    showTagCount(count) {
      this.tagCount = count;
    },

    hideTagCount() {
      this.tagCount = '';
    }
  }
};
