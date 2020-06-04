// images should be named like '00.jpg', '01.jpg',
// '02.jpg', ...,  '30.jpg', '31.jpg', ..., 'n.jpg'
// imagesCount is 88
const imagesCount = 88;
const imagesPath = '/advice-img';

const images = Array.from(new Array(imagesCount), (value, index) => {
  if (index < 10) {
    return `${imagesPath}/0${index}.jpg`;
  }
  return `${imagesPath}/${index}.jpg`;
});

export const BG_ARRAY = images;
