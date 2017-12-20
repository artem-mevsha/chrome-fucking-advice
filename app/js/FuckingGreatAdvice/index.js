export default class FuckingGreatAdvice {

  constructor(url) {
    this.images = [
      '0.jpg',
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
    ];
    this.url = url;
    this.apiEndpoint = 'api';
    this.soundSrc = `${url}`;
    this.errorText = 'Ошибка скоро будет исправлена. Потерпи блять!';
    this.init();
  }

  init() {
    this.fetchQuote();
  }

  getApiEndpoint() {
    const { url, apiEndpoint } = this;
    return `${url}/${apiEndpoint}`;
  }

  getImageUrl() {
    const images = this.images;
    const imageIndex = Math.floor(Math.random() * (images.length - 0));
    return `img/${images[imageIndex]}`;
  }

  fetchQuote() {
    const apiUrl = this.getApiEndpoint();
    fetch(`${apiUrl}/random`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => response.json())
    .then(json => this.renderQuote(json.text))
    .catch(() => this.renderQuote(this.errorText));
  }

  renderQuote(text) {
    this.text = text;
    const adviceSelector = document.querySelector('.advice');
    const textSelector = document.querySelector('.advice__text');
    const imageSrc = this.getImageUrl();

    adviceSelector.style.backgroundImage = `url(${imageSrc})`;
    textSelector.innerHTML = text;
    textSelector.classList.add('advice__text--ready');
  }
}
