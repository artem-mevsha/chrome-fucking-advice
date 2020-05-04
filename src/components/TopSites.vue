<template>
  <div class="topsites">
    <ul v-if="topSites">
      <li class="topsites__item"
        :key="index"
        v-for="(site, index) in topSites"
      >
        <a class="topsites__link"
          :href="site.url"
          :title="site.title"
        >
          <img class="topsites__favicon"
            :src="`${FAVICONS_URL}${site.url}`"
            :alt="site.title"
          />
          <span class="topsites__title">
            {{ site.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { FAVICONS_URL } from '@/common/config'

export default {
  name: 'FgaTopSites',
  data () {
    return {
      topSites: [],
      FAVICONS_URL
    }
  },
  mounted () {
    if (!chrome || !chrome.topSites) {
      return
    }

    chrome.topSites.get(topSites => {
      if (topSites.length) {
        this.topSites = topSites
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.topsites {
  position: absolute;
  width: 75%;
  max-width: 75vw;
  margin: 0;
  padding: 0 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 34px;
  height: 20px;
  z-index: 2;
  user-select: none;
  text-align: center;
  overflow: hidden;
  letter-spacing: -4px;
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .topsites {
    bottom: 12px;
  }
}

.topsites__item {
  display: inline-block;
  margin: 0 4px 4px;
  letter-spacing: normal;
}

.topsites__link {
  display: block;
  text-transform: none;
  text-decoration: none;
  font-size: 1.4rem;
  letter-spacing: .02em;
  padding: 2px 3px 2px;
  color: currentColor;
  user-select: none;
  opacity: .5;
  background: rgba(0,0,0,.2);
  text-shadow: rgba(0,0,0,.2) 0 0 0.33em;
  transition: all .3s ease;
  &:hover {
    opacity: 1;
    background: #ffffff;
    text-shadow: rgba(255,255,255,.2) 0 0 0.33em;
    color: #000;
    .topsites__favicon {
      filter: grayscale(0);
    }
  }
}

.topsites__favicon {
  display: inline-block;
  max-width: 16px;
  vertical-align: middle;
  margin-right: 4px;
  filter: grayscale(50%);
}

.topsites__title {
  display: inline-block;
  vertical-align: middle;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
