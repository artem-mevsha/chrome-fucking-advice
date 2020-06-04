import { BASE_URL } from '../common/config'
import { BG_ARRAY } from '../common/bg-array'
import { getStorageItem, setStorageItem } from '../common/storage.service'
import ApiService from '../common/api.service'

const state = {
  images: [],
  advices: [],
  activeAdvice: null,
  activeImage: null,
  tags: [],
  activeTag: null
}

const getters = {
  activeAdvice (state) {
    const advice = state.activeAdvice

    // show maximum 3 tags for advice
    // get 3 tags one-by-one from random position of Array
    if (advice && advice.tags && advice.tags.length > 3) {
      const startPos = Math.floor(Math.random() * (advice.tags.length - 2))
      const tags = advice.tags.slice(startPos, startPos + 3)
      advice.tags = tags
    }

    return advice
  },

  adviceUrl (state) {
    let url = `${BASE_URL}/advice/`
    if (state.activeTag) {
      url += `${state.activeTag.alias}/`
    }
    url += `${state.activeAdvice.id}`
    return url
  }
}

const mutations = {
  SET_ADVICES (state, advices) {
    state.advices = advices
    state.activeAdvice = {
      index: 0,
      ...advices[0]
    }
  },

  SET_TAGS (state, tags) {
    state.tags = tags
  },

  SET_IMAGES (state, images) {
    state.images = images
    state.activeImage = images[0]
  },

  SET_RND_IMAGE (state) {
    state.activeImage = state.images[Math.floor(Math.random() * state.images.length)]
  },

  SET_NEXT_ADVICE (state, index) {
    index++

    state.activeAdvice = {
      index,
      ...state.advices[index]
    }
  },

  SET_TAG (state, tag) {
    if (!tag) {
      state.activeTag = null
      setStorageItem('fga-tag', '')
      return
    }
    state.activeTag = tag
    setStorageItem('fga-tag', JSON.stringify(tag))
  }
}

const actions = {
  FETCH_ALL_DATA ({ commit, dispatch }) {
    dispatch('INIT_PRELOADER')

    if (BG_ARRAY.length) {
      commit('SET_IMAGES', BG_ARRAY)
      commit('SET_RND_IMAGE')
    }

    // get active tag from Chrome localstorage before first load
    getStorageItem('fga-tag').then(tag => {
      if (tag && tag.length) {
        const tagObj = JSON.parse(tag)
        if (tagObj.alias && tagObj.name) {
          commit('SET_TAG', tagObj)
        }
      }
    })

    ApiService.getTagsAndAdvices(state.activeTag)
      .then(({ tags, advices }) => {
        commit('SET_TAGS', tags)
        commit('SET_ADVICES', advices)
      }).catch(error => {
        commit('SET_ERROR', error)
      }).finally(() => {
        commit('SET_LOADING', false)
      })
  },

  FETCH_ADVICES ({ commit, dispatch, state }) {
    dispatch('INIT_PRELOADER')
    commit('SET_ADVICES', [])

    ApiService.getAdvices(state.activeTag, state.tags)
      .then(advices => {
        commit('SET_ADVICES', advices)
      }).catch(error => {
        commit('SET_ERROR', error)
      }).finally(() => {
        commit('SET_LOADING', false)
      })
  },

  NEXT_ADVICE ({ commit, dispatch, state }) {
    const adviceIndex = state.activeAdvice.index
    if (adviceIndex + 1 === state.advices.length) {
      dispatch('FETCH_ADVICES')
    } else {
      commit('SET_NEXT_ADVICE', adviceIndex)
    }
    commit('SET_RND_IMAGE')
  },

  CHOOSE_TAG ({ commit, dispatch, state }, tagAlias) {
    if (!tagAlias) {
      commit('SET_TAG', null)
    }

    const foundTag = state.tags.find(tag => {
      return tag.alias === tagAlias
    })

    if (foundTag) {
      commit('SET_TAG', {
        id: foundTag.id,
        alias: foundTag.alias,
        name: foundTag.name
      })
    }

    commit('SET_RND_IMAGE')
    dispatch('FETCH_ADVICES')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
