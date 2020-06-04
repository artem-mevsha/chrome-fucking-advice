import Vue from 'vue'
import { getStorageItem, setStorageItem } from '../common/storage.service'

const state = {
  options: [
    {
      alias: 'logo',
      name: 'Логотип',
      value: true
    },
    {
      alias: 'tags',
      name: 'Теги',
      value: true
    },
    {
      alias: 'top-sites',
      name: 'Часто посещаемые сайты',
      value: true
    }
  ]
}

const getters = {
  optionByAlias: state => alias => {
    // return option value by name
    const foundOption = state.options.find(option => option.alias === alias)
    if (foundOption) {
      return foundOption.value
    }
  }
}

const mutations = {
  SET_SETTINGS (state, option) {
    const index = state.options.findIndex(block => block.alias === option.alias)
    Vue.set(state.options[index], 'value', option.value)
    setStorageItem(`fga-${option.alias}`, `${option.value}`)
  }
}

const actions = {
  SYNC_SETTINGS ({ dispatch, state }) {
    // check all the options in chrome storage
    state.options.forEach(option => {
      getStorageItem(`fga-${option.alias}`)
        .then(storageValue => {
          // if option was saved in storage before -
          if (storageValue) {
            if (storageValue.length) {
              storageValue = (storageValue === 'true')
            }
            dispatch('UPDATE_SETTINGS', {
              alias: option.alias,
              value: storageValue
            })
          }
        })
    })
  },
  UPDATE_SETTINGS ({ commit }, option) {
    commit('SET_SETTINGS', option)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
