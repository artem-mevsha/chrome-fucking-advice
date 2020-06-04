/**
 * Sets item to Chrome storage API.
 * If Chrome storage is disabled - set item to localstorage
 * @param {String} key to save
 * @param {Any} value to save
 */
function setStorageItem(key, value) {
  if (chrome && chrome.storage) {
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({ [key]: value });
  } else if (localStorage) {
    localStorage.setItem(key, value);
  }
}

/**
 * Gets item from Chrome storage API.
 * If Chrome storage is disabled - get item from localstorage
 * @param {String} key to get
 * @returns {Function} Promise with {String} or {Null} as param
 */
function getStorageItem(key) {
  return new Promise((resolve) => {
    if (chrome && chrome.storage) {
      // Get it using the Chrome extension storage API.
      chrome.storage.sync.get([key], (result) => {
        resolve(result[key]);
      });
    } else if (localStorage) {
      resolve(localStorage.getItem(key));
    } else {
      resolve(null);
    }
  });
}

export { setStorageItem, getStorageItem };
