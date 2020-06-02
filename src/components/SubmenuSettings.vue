<template>
  <nav class="submenu__nav submenu__nav_aux">
    <div class="settings">
      <div class="settings__content">
        <div class="submenu__link submenu__link_size_small submenu__link_disabled">Дизайн</div>
        <ul class="settings__items" v-if="options">
          <li class="settings__item"
            :key="index"
            v-for="(option, index) in options"
          >
            <fga-settings-checkbox :option="option" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import FgaSettingsCheckbox from './SettingsCheckbox.vue'

export default {
  name: 'FgaSubmenuSettings',
  components: {
    FgaSettingsCheckbox
  },
  computed: {
    ...mapState({
      options: state => state.settings.options
    }),
    adviceUrl () {
      return this.$store.getters.adviceUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.settings {
  display: block;
  font-family: $font-helvetica;
}

.settings__item {
  display: block;
  margin: 1.5rem 0;
  font-size: 2.5rem;
  color: #999;
}
</style>
