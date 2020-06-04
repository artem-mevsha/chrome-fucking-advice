<template>
  <div class="advice">
    <div class="advice__aligner">

      <!-- Error content start -->
      <transition v-if="error" name="advice-slide" mode="out-in">
        <div class="advice__content"
          :key="error"
        >
          <h1 class="advice__text">
            <fga-advice-link
              :advice="error"
              @click.native="checkConnection"
            />
          </h1>
        </div>
      </transition>
      <!-- Error content End -->

      <!-- Advice content start -->
      <transition v-else-if="advice" name="advice-slide" mode="out-in">
        <div class="advice__content"
          :key="advice.id"
        >
          <h1 class="advice__text">
            <fga-advice-link
              :advice="advice.html"
              @click.native="nextAdvice"
            />
          </h1>

          <a class="advice__btn advice__btn_external"
            v-if="advice.link"
            :href="advice.link.href | externalUrlFilter"
          >{{ advice.link.text }}</a>

          <transition appear name="tags-slide">
            <ul class="advice__tags"
              v-if="advice.tags && isTagsEnabled"
            >
              <li class="advice__tag"
                :key="index"
                v-for="(tag, index) in advice.tags"
              >
                <a class="advice__tag-link"
                  :class="{ 'advice__tag-link_active' : isTagActive(tag.alias) }"
                  @click.prevent="chooseTag(tag.alias)"
                >#&thinsp;<span class="advice__tag-name">{{ tag.name }}</span>
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </transition>
      <!-- Advice content end -->

      <transition appear name="bg-scale" mode="out-in">
        <div
          class="advice__bg"
          :key="image"
          :style="{ backgroundImage: `url(${image})`}"
          style="transform: matrix(1, 0, 0, 1, 0, 0);"
        ></div>
      </transition>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import externalUrlFilter from '../common/external-url.filter'
import FgaAdviceLink from './AdviceLink.vue'

export default {
  name: 'FgaAdvice',
  components: {
    FgaAdviceLink
  },
  filters: {
    externalUrlFilter
  },
  computed: {
    ...mapState({
      error: state => state.error,
      image: state => state.advices.activeImage,
      activeTag: state => state.advices.activeTag
    }),
    isTagsEnabled () {
      return this.$store.getters.optionByAlias('tags')
    },
    advice () {
      return this.$store.getters.activeAdvice
    }

  },
  methods: {
    checkConnection () {
      this.$store.dispatch('FETCH_ALL_DATA')
    },
    nextAdvice () {
      this.$store.dispatch('NEXT_ADVICE')
    },
    chooseTag (tagAlias) {
      this.$store.dispatch('CHOOSE_TAG', tagAlias)
    },
    isTagActive (tagAlias) {
      const activeTag = this.activeTag
      if (activeTag && activeTag.alias) {
        return activeTag.alias === tagAlias
      }
      return false
    }
  }
}
</script>

<style lang="scss">
@import "../scss/variables";

.advice {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  letter-spacing: .02em;
  transition: transform .3s ease;
  z-index: 2
}

.advice_fake {
  z-index: 1
}

.advice:empty {
  display: none
}

.advice__aligner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%
}

.advice__content {
  margin: auto;
  z-index: 1;
  text-align: center
}

.advice__bg {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover
}

.advice__bg:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5)
}

.advice__bg_color:before {
  display: none
}

.advice__text {
  display: block;
  text-align: left;
  position: relative;
  font-size: 12.5rem;
  line-height: .9;
  letter-spacing: 0;
  font-family: $font-helvetica;
  user-select: none;
  cursor: pointer;
  text-align: center
}

@media only screen and (max-width:767px) {
  .advice__text {
    font-size: 10rem
  }
}

@media only screen and (max-width:480px) {
  .advice__text {
    font-size: 8rem
  }
}

.advice__text_enlarged .advice__text {
  font-size: 19rem;
  line-height: 15.4rem
}

.advice__text_enlarged .advice__img-holder {
  height: 13.6rem
}

.advice__link {
  text-align: left
}

.advice__btn,
.advice__link {
  display: inline-block;
  text-decoration: none;
  color: currentColor;
  cursor: pointer
}

.advice__btn {
  position: relative;
  border: 1px solid currentColor;
  margin: 1.7rem auto .3rem;
  padding: .7rem 1.4rem;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  border-radius: 1px;
  background-color: hsla(0, 0%, 100%, 0);
  transition: background-color .6s ease, color .6s ease
}

.advice__btn:hover {
  background-color: #fff;
  color: #000;
  transition: background-color .3s ease, color .3s ease
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .advice__btn {
    font-size: 2.4rem
  }
}

.advice__btn_external:after,
.advice__btn_external:before {
  content: "";
  position: absolute;
  width: 50%;
  border-top: 1px solid currentColor;
  height: 0;
  top: 50%;
  min-width: 50px;
  max-width: 100px;
  transition: border-color .6s ease
}

.advice__btn_external:before {
  right: 100%
}

.advice__btn_external:after {
  left: 100%
}

.advice__btn_external:hover:after,
.advice__btn_external:hover:before {
  transition: border-color .3s ease;
  border-color: #fff
}

.advice__tags {
  text-align: center;
  margin-top: 2.7rem
}

.advice__tag {
  display: inline-block;
  margin-right: 1.6rem
}

.advice__tag:last-child {
  margin-right: 0
}

.advice__tag-name {
  letter-spacing: .05em
}

.advice__tag-link {
  display: inline-block;
  padding: .3rem .8rem;
  border: 1px solid currentColor;
  border-radius: 1px;
  color: #fff;
  background-color: hsla(0, 0%, 100%, 0);
  text-decoration: none;
  opacity: .5;
  transition: opacity .6s ease, color .6s ease, background-color .6s ease, border-color .6s ease;
  cursor: pointer;
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .advice__tag-link {
    padding: 3px 8px 1px;
    font-size: 14px
  }
}

@media only screen and (max-width:479px) {
  .advice__tag-link {
    padding: 3px 8px 1px;
    font-size: 14px
  }
}

.advice__tag-link.advice__tag-link_active,
.advice__tag-link:hover {
  color: #000;
  background-color: #fff;
  opacity: 1;
  border-color: #fff
}

.advice__tag-link:hover {
  transition: opacity .3s ease, color .3s ease, background-color .3s ease, border-color .3s ease
}

.advice__tag-link.advice__tag-link_active {
  cursor: default
}

.advice__tag-link.advice__tag-link_invert {
  color: currentColor
}

.advice__tag-link.advice__tag-link_invert.advice__tag-link_active,
.advice__tag-link.advice__tag-link_invert:hover {
  border-color: #333;
  background-color: #333;
  color: #fff
}

.advice__description {
  margin-top: 1.2rem;
  font-size: 4rem;
  opacity: .5
}

.advice__share {
  width: 100%;
  margin: 0;
  padding: 0 16.666666666666668%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 36px;
  text-align: center;
  z-index: 1;
  user-select: none
}

.advice__share:empty {
  display: none
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .advice__share {
    padding: 0 20px;
    bottom: 12px
  }
}

@media only screen and (max-width:479px) {
  .advice__share {
    padding: 0 20px;
    bottom: 16px
  }
}

.advice__social-item {
  display: inline-block;
  margin-right: 3rem;
  font-size: 1.4rem
}

.advice__social-item:last-child {
  margin-right: 0
}

.advice__social-link {
  display: inline-block;
  position: relative;
  padding-left: 2rem;
  cursor: default
}
</style>
