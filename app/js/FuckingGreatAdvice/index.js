export default class FuckingGreatAdvice {

  constructor(url) {
    this.url = url;
    this.apiEndpoint = 'api';
    this.soundSrc = `${url}`;
    this.init();
  }

  init() {
    this.fetchQuote();
  }

  getApiEndpoint() {
    const { url, apiEndpoint } = this;
    return `${url}/${apiEndpoint}`;
  }

  fetchQuote() {
    const apiUrl = this.getApiEndpoint();
    fetch(`${apiUrl}/random`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => response.json())
    .then(json => this.renderQuote(json.text));
  }

  renderQuote(text) {
    this.text = text;
    const textSelector = document.querySelector('.advice__text');
    textSelector.innerHTML = text;
    textSelector.classList.add('advice__text--ready');
  }
}
