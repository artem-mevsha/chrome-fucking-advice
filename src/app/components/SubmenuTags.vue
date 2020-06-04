<template>
  <nav class="submenu__nav submenu__nav_aux">
    <ul v-if="tags">
      <li :key="tag.id" v-for="tag in tags">
        <a
          class="submenu__link submenu__link_size_small"
          :class="{ submenu__link_active: isTagActive(tag.alias) }"
          @click="chooseTag(tag.alias)"
          @mouseenter="showTagCount(tag.advicesCount)"
          @mouseleave="hideTagCount"
          >{{ tag.name }}</a
        >
      </li>
    </ul>
    <figure class="submenu__counter">
      <transition appear name="counter-slide" mode="in-out">
        <span class="submenu__counter-value" v-if="tagCount">{{ tagCount }}</span>
      </transition>
    </figure>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FgaSubmenuTags',
  data() {
    return {
      tagCount: '',
    };
  },
  computed: {
    ...mapState({
      activeTag: (state) => state.advices.activeTag,
      tags: (state) => state.advices.tags,
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
    },
  },
};
</script>
