import axios from 'axios'
import { API_URL, BASE_URL } from './config'
import formatAdvices from './format-advices'
import getMessage from './get-message'

// default error if there is no error message in translation files
const ERROR_TEXT = 'Где<br> блять<br> интернет?'

/**
 * Gets url for advices fetching
 * @param {Object} activeTag - active tag with required alias property
 * @return {String} url
 */
function advicesApiUrl (activeTag) {
  if (activeTag && activeTag.alias) {
    return `${API_URL}/random-advices-by-tag?tag=${activeTag.alias}`
  }

  return `${API_URL}/random-advices`
}

const ApiService = {
  init () {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.timeout = 7000
  },

  getTagsAndAdvices (activeTag) {
    const tagsRequest = axios.get(`${API_URL}/tags`)
    const advicesRequest = axios.get(advicesApiUrl(activeTag))

    return new Promise((resolve, reject) => {
      axios.all([tagsRequest, advicesRequest])
        .then(axios.spread((...responses) => {
          const tagsResponse = responses[0]
          const advicesResponse = responses[1]

          if (tagsResponse.data.status !== 'success') {
            throw new Error(tagsResponse.data.errors)
          }

          if (advicesResponse.data.status !== 'success') {
            throw new Error(advicesResponse.data.errors)
          }

          const tags = tagsResponse.data.data
          let advices = advicesResponse.data.data

          if (!tags || !tags.length) {
            throw new Error('Cannot get tags')
          }

          if (!advices || !advices.length) {
            throw new Error('Cannot get advices')
          }

          advices = formatAdvices(advices, tags)
          resolve({ tags, advices })
        })).catch(errors => {
          console.log(`Fucking great advice ${errors}`)
          const errorMessage = getMessage('default_error', ERROR_TEXT)
          reject(errorMessage)
        })
    })
  },

  getAdvices (activeTag, tags) {
    return new Promise((resolve, reject) => {
      axios.get(advicesApiUrl(activeTag))
        .then(response => {
          if (response.data.status !== 'success') {
            throw new Error(response.data.errors)
          }

          let advices = response.data.data

          if (!advices && !advices.length) {
            throw new Error('Cannot get advices')
          }

          advices = formatAdvices(advices, tags)
          resolve(advices)
        })
        .catch(error => {
          console.log(`Fucking great advice ${error}`)
          const errorMessage = getMessage('default_error', ERROR_TEXT)
          reject(errorMessage)
        })
    })
  }
}

export default ApiService
