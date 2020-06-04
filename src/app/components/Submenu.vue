<template>
  <transition appear name="submenu-main-slide" mode="out-in">
    <section class="submenu">
      <div class="submenu__content">
        <nav class="submenu__nav submenu__nav_main">
          <ul v-if="menuItems">
            <li
              :key="menuItem.slug"
              v-for="menuItem in menuItems"
            >
              <template v-if="menuItem.hasSubMenu">
                <a class="submenu__link"
                  :class="{ 'submenu__link_active' : menuItem.slug === activeSubmenu }"
                  @click.prevent="showSubmenu(menuItem.slug)"
                >{{ menuItem.name }}</a>
              </template>
              <template v-else>
                <a class="submenu__link"
                  :href="menuItem.url"
                >{{ menuItem.name }}</a>
              </template>
            </li>
          </ul>
          <div class="social">
            <a class='social__link'
              :key="index"
              v-for="(link, index) in social"
              :href="link.url"
              ><font-awesome-icon :icon="['fab', link.alias]" /></a>
          </div>
        </nav>
        <transition appear name="submenu-secondary-slide" mode="out-in">
          <fga-submenu-tags v-if="activeSubmenu === 'tags'" />
        </transition>
        <fga-submenu-settings v-if="activeSubmenu === 'settings'" />
      </div>
    </section>
  </transition>
</template>

<script>
import FgaSubmenuTags from './SubmenuTags.vue'
import FgaSubmenuSettings from './SubmenuSettings.vue'

export default {
  name: 'FgaSubmenu',
  components: {
    FgaSubmenuTags,
    FgaSubmenuSettings
  },
  computed: {
    menuItems () {
      return this.$store.state.menu.menuItems
    },
    social () {
      return this.$store.state.menu.social
    },
    activeSubmenu () {
      return this.$store.state.menu.activeSubmenu
    }
  },
  methods: {
    showSubmenu (slug) {
      this.$store.dispatch('SHOW_SUBMENU', slug)
    }
  }
}
</script>

<style lang="scss">
@import "../scss/variables";

.submenu {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  letter-spacing: .025em;
  font-family: $font-helvetica;
  z-index: 2;
}

.submenu__content {
  position: relative;
  padding-left: 0;
  height: 100vh;
  overflow: auto;
}

.submenu__nav {
  max-width: 30%;
  font-family: $font-helvetica;
}

.submenu__nav_main {
  position: fixed;
  left: 16.666666666666668%;
  top: 16.666666666666668vh;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .submenu__nav_main {
    top: 25vh;
    left: 20px;
  }
}

@media only screen and (max-width: 479px) {
  .submenu__nav_main {
    left: 20px;
    top: 25vh;
  }
}

.submenu__nav_aux {
  margin-top: 6.5rem;
  padding-left: 50%;
  padding-top: 16.666666666666668vh;
  padding-bottom: 16.666666666666668vh;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .submenu__nav_aux {
    top: 25vh;
    left: 20px;
  }
}

.submenu__link {
  & {
    letter-spacing: 0;
    text-decoration: none;
    white-space: nowrap;
    transition: color .33s ease;
    font-size: 7.2rem;
    line-height: .89;
    color: #999;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  &_active {
    color: #fff;
    cursor: default;
  }
}

@media only screen and (max-width: 479px) {
  .submenu__link {
    font-size: 6.4rem;
  }
}

.submenu__link_size_small {
  & {
    font-size: 5rem;
    line-height: .92;
    color: #333;
    &:hover {
      color: #ccc;
    }
  }
  &.submenu__link_active {
    color: #666;
    cursor: default;
  }
}

.submenu__link_disabled {
  cursor: default;
  &:hover {
    color: #333;
  }
}

.submenu__counter {
  position: fixed;
  margin: .2rem 0 0 -.2rem;
  top: 16.666666666666668%;
  left: 83.33333333333334%;
  width: 25%;
  height: 20rem;
  overflow: hidden;
}

.submenu__counter-value {
  position: absolute;
  display: block;
  overflow: hidden;
  font-family: $font-helvetica;
  color: #333;
  font-size: 11.5rem;
  line-height: .8;
}

.submenu__footer {
  position: fixed;
  left: 0;
  bottom: 40px;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .submenu__footer {
    bottom: 18px;
  }
}

@media only screen and (max-width: 479px) {
  .submenu__footer {
    bottom: 18px;
  }
}

.submenu__footerlink {
  & {
    display: inline-block;
    min-width: 16.666666666666668vw;
    padding-right: 40px;
    color: #666;
    font-family: $font-bebas;
    font-size: 1.4rem;
    text-decoration: none;
    letter-spacing: .02;
    transition: color .3s ease;
  }
  &.router-link-exact-active {
    display: none;
  }
  & {
    &:first-child {
      padding-left: 40px;
    }
    &:hover {
      color: #999;
    }
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .submenu__footerlink {
    font-size: 14px;
    padding-right: 20px;
  }
}

@media only screen and (max-width: 479px) {
  .submenu__footerlink {
    font-size: 14px;
    padding-right: 20px;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .submenu__footerlink:first-child {
    padding-left: 20px;
  }
}

@media only screen and (max-width: 479px) {
  .submenu__footerlink:first-child {
    padding-left: 20px;
  }
}

.social {
  margin: 2.4rem 0;
}

.social__link {
  display: inline-block;
  color: #999;
  background: none;
  font-size: 3rem;
  margin-right: 1rem;
  transition: color .3s ease;
  &:hover {
    color: #fff;
  }
}
</style>
