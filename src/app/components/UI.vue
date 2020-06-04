<template>
  <header class="ui ui_hoverable">
    <div class="ui__logo">
      <a class="ui__logo-text"
        v-if="isLogoEnabled"
        :href="baseUrl"
      >Охуенный блять совет</a>

      <div class="ui__logo-tag" v-if="activeTag">
        <a class="ui__chapter"
          @click.prevent="resetTag"
        >{{ activeTag.name }}
        </a>
      </div>
    </div>
    <div>
      <div class="ui__menu-icon"
        :class="{ 'ui__menu-icon_opened' : isMenuOpened }"
        @click="toggleMenu"
      ></div>
      <fga-submenu v-if="isMenuOpened"/>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

import { BASE_URL } from '../common/config'
import FgaSubmenu from './Submenu.vue'

export default {
  name: 'FgaUI',
  components: {
    FgaSubmenu
  },
  data () {
    return {
      baseUrl: BASE_URL
    }
  },
  computed: {
    ...mapState({
      activeTag: state => state.advices.activeTag,
      isMenuOpened: state => state.menu.isMenuOpened
    }),
    isLogoEnabled () {
      return this.$store.getters.optionByAlias('logo')
    }
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('TOGGLE_MENU')
    },
    resetTag () {
      this.$store.dispatch('CHOOSE_TAG', null)

      if (this.isMenuOpened) {
        this.$store.dispatch('TOGGLE_MENU')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.ui {
  position: absolute;
  width: 100%;
  height: 10rem;
  padding-top: 40px;
  z-index: 2;
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui {
    padding-top: 20px
  }
}

@media only screen and (max-width:479px) {
  .ui {
    padding-top: 20px
  }
}

.ui:after {
  display: block;
  width: 100%;
  height: 25vh;
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, transparent);
  opacity: 0;
  transition: opacity .6s ease;
  z-index: 1
}

.ui_hoverable {
  z-index: 11
}

.ui_hoverable:after {
  content: ""
}

.ui_hoverable:hover:after {
  opacity: 1
}

.ui_fixed {
  position: fixed;
  top: 0;
  z-index: 11
}

.ui_abs {
  position: absolute;
  top: 0
}

.ui_inverted {
  color: #fff
}

.ui__logo {
  position: absolute;
  top: 37px;
  left: 40px;
  z-index: 10
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui__logo {
    top: 17px;
    left: 20px
  }
}

@media only screen and (max-width:479px) {
  .ui__logo {
    top: 18px;
    left: 20px
  }
}

.ui__logo-text {
  height: 20px;
  color: currentColor;
  text-decoration: none;
  transition: color .6s ease
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui__logo-text {
    font-size: 16px
  }
}

@media only screen and (max-width:479px) {
  .ui__logo-text {
    font-size: 14px
  }
}

.ui__logo-text.router-link-exact-active {
  cursor: default
}

.ui__chapter {
  display: inline-block;
  padding: .3rem .8rem .1rem;
  border: 1px solid #fff;
  border-radius: 1px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #000;
  text-decoration: none;
  opacity: 1;
  cursor: pointer;
}

.ui__chapter.ui__chapter_invert {
  border: 1px solid #222;
  background-color: initial;
  color: #222
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui__chapter {
    padding: 3px 8px 1px;
    font-size: 14px
  }
}

@media only screen and (max-width:479px) {
  .ui__chapter {
    padding: 3px 8px 1px;
    font-size: 14px
  }
}

.ui__shortcuts {
  position: absolute;
  top: 33px;
  right: 40px;
  text-align: right;
  z-index: 10
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui__shortcuts {
    top: 13px;
    right: 20px
  }
}

@media only screen and (max-width:479px) {
  .ui__shortcuts {
    top: 13px;
    right: 80px
  }
}

.ui__logo,
.ui__shortcut {
  font-size: 1.6rem;
  letter-spacing: .02em
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .ui__logo,
  .ui__shortcut {
    font-size: 16px
  }
}

.ui__shortcut {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: currentColor;
  white-space: nowrap;
  margin-right: 4rem;
  cursor: pointer;
  line-height: 2.4rem;
  vertical-align: middle;
  user-select: none;
  transition: color .6s ease
}

.ui__shortcut:last-child {
  margin-right: 0
}

.ui__shortcut.router-link-active {
  cursor: default
}

.ui__shortcut_icon {
  position: relative;
  top: 3px;
  margin-left: -6px
}

@media only screen and (max-width:479px) {
  .ui__shortcut_icon {
    top: 5px;
    font-size: 16px
  }
}

@media only screen and (max-width:479px) {
  .ui__shortcut_link {
    display: none
  }
}

.ui__menu-icon {
  width: 3.1rem;
  height: 3.1rem;
  cursor: pointer;
  position: absolute;
  right: 40px;
  margin-left: -1.5rem;
  margin-top: -1rem;
  z-index: 3;
  transition: margin-top .1s ease, opacity .2s ease, color .6s ease-in-out
}

@media only screen and (max-width:767px) {
  .ui__menu-icon {
    width: 30px;
    height: 30px;
    margin-left: 0;
    margin-top: -10px;
    left: auto;
    right: 15px;
    top: 20px
  }
}

.ui__menu-icon:after,
.ui__menu-icon:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5rem;
  margin-left: -1.25rem;
  height: .2rem;
  background-color: currentColor;
  transform: rotate(0deg);
  transition: box-shadow .2s ease-in-out, transform .33s ease-in-out, background-color .2s ease-in-out
}

@media only screen and (max-width:479px) {
  .ui__menu-icon:after,
  .ui__menu-icon:before {
    width: 20px;
    height: 1px;
    margin-left: -7px;
    margin-top: 2px
  }
}

.ui__menu-icon:before {
  box-shadow: 0 -.6rem 0 0 currentColor
}

@media only screen and (max-width:479px) {
  .ui__menu-icon:before {
    box-shadow: 0 -5px 0 0 currentColor
  }
}

.ui__menu-icon:after {
  box-shadow: 0 .6rem 0 0 currentColor
}

@media only screen and (max-width:479px) {
  .ui__menu-icon:after {
    box-shadow: 0 5px 0 0 currentColor
  }
}

.ui__menu-icon_opened:after,
.ui__menu-icon_opened:before {
  box-shadow: -4px 0 0 -1px hsla(0, 0%, 100%, 0);
  background-color: currentColor
}

.ui__menu-icon_opened:before {
  transform: rotate(45deg)
}

.ui__menu-icon_opened:after {
  transform: rotate(-45deg)
}

.ui__menu-icon:hover {
  opacity: .8
}

.ui__cart-counter {
  position: absolute;
  right: -2.2rem;
  bottom: .1rem;
  border-radius: 100%;
  line-height: 2.4rem;
  vertical-align: middle;
  color: #fff;
  background: #c00;
  font-weight: 700;
  text-align: center;
  font-size: 1.4rem;
  margin-left: .4rem;
  min-width: 2.4rem;
  height: 2.4rem
}
</style>
