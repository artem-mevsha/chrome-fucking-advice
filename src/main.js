import Vue from 'vue'

import ApiService from './common/api.service'
import App from './App.vue'
import store from './store'

// adding only few fontawesome icons to library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquare, faCheckSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegramPlane, faVk, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSquare, faCheckSquare, faExternalLinkAlt, faInstagram, faTelegramPlane, faVk, faTwitter, faYoutube, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

ApiService.init()

new Vue({
  store,
  render: h => h(App)
}).$mount('#fga')
