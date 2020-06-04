import Vue from 'vue';

// adding only few fontawesome icons to library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faCheckSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram, faTelegramPlane, faVk, faTwitter, faYoutube, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import App from './App.vue';
import ApiService from './common/api.service';

library.add(
  faSquare,
  faCheckSquare,
  faExternalLinkAlt,
  faInstagram,
  faTelegramPlane,
  faVk,
  faTwitter,
  faYoutube,
  faGithub,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

global.browser = require('webextension-polyfill');

Vue.prototype.$browser = global.browser;

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#fga');
