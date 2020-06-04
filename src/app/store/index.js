import Vue from 'vue';
import Vuex from 'vuex';

import advices from './advices.module';
import settings from './settings.module';
import menu from './menu.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    error: null,
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.isLoading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    INIT_PRELOADER({ state, commit }) {
      // if (!state.isLoading) {
      //   commit('SET_LOADING', true)
      // }

      if (state.error) {
        commit('SET_ERROR', null);
      }
    },
  },
  modules: {
    advices,
    settings,
    menu,
  },
});
