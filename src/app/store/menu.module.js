/* eslint-disable no-shadow */
import { BASE_URL } from '../common/config';

const state = {
  isMenuOpened: false,
  activeSubmenu: 'tags',
  menuItems: [
    { slug: 'tags', name: 'Совет', hasSubMenu: true },
    { slug: 'settings', name: 'Настройка', hasSubMenu: true },
    { slug: 'shop', name: 'Мерч', url: `${BASE_URL}/shop` },
    { slug: 'apps', name: 'Приложения', url: `${BASE_URL}/apps` },
  ],
  social: [
    { alias: 'instagram', url: 'https://www.instagram.com/fucking_great_advice/' },
    { alias: 'telegram-plane', url: 'https://tlgg.ru/obsovet' },
    { alias: 'vk', url: 'https://vk.com/fucking_great_advice' },
    { alias: 'twitter', url: 'https://twitter.com/365advices/' },
    { alias: 'youtube', url: 'https://www.youtube.com/channel/UCmdoWxVWWmHnBqUG9mqV4pQ/' },
    { alias: 'github', url: 'https://github.com/artem-mevsha/chrome-fucking-advice' },
  ],
};

const getters = {};

const mutations = {
  SET_MENU_VISIBILITY(state, isMenuVisible) {
    state.isMenuOpened = isMenuVisible;
  },
  SET_ACTIVE_SUBMENU(state, slug) {
    state.activeSubmenu = slug;
  },
};

const actions = {
  TOGGLE_MENU({ commit, state }) {
    commit('SET_MENU_VISIBILITY', !state.isMenuOpened);
  },
  SHOW_SUBMENU({ commit, state }, slug) {
    if (state.activeSubmenu !== slug) {
      commit('SET_ACTIVE_SUBMENU', slug);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
