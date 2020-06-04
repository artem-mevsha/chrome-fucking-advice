/**
 * Gets message from chrome.i18n translation files
 * @param {String} message - locale message key
 * @param {String} defaultMessage (not required) - default message
 * if there is no i18n message. By default it's empty string
 * @returns {String}
 */
function getMesssage(message, defaultMessage = '') {
  if (chrome && chrome.i18n) {
    return chrome.i18n.getMessage(message) || defaultMessage;
  }
  return defaultMessage;
}

export default getMesssage;
