import {FAVICONS_URL} from '../../common/config';

export default {
  name: 'FgaTopSites',

  data() {
    return {
      topSites: [],
      FAVICONS_URL
    };
  },

  mounted() {
    if (!chrome || !chrome.topSites) {
      return;
    }

    chrome.topSites.get((topSites) => {
      if (topSites.length) {
        this.topSites = topSites;
      }
    });
  }
};
