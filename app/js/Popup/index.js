export default class Popup {
  constructor() {
    this.defaultCategory = 'all';
    this.category = localStorage['fucking-great-advice-category'] || this.defaultCategory;
    this.initListeners();
  }

  setCategory(category) {
    this.category = category;
    localStorage['fucking-great-advice-category'] = category;
  }

  initListeners() {
    const categorySelector = document.querySelector('.radio__input');
    categorySelector.addEventListener('change', function() {
      this.setCategory(this.value);
    });
  }
}
