import { BASE_URL } from './config'

export default url => {
  // check if link with advice
  // is internal link from fucking-great-advice.ru
  // example: '/shop', '/apps'
  if (url[0] === '/') {
    // if yes - transform url to external link
    // example 'https://fucking-great-advice.ru/shop'
    return `${BASE_URL}${url}`
  }

  // otherwise return origin value
  return url
}
