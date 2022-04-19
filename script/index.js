const cards = [
  {
    name: 'Квартира',
    link: './img/flat.jpg'  
  },  
  {
    name: 'Дом',
    link: './img/house.jpg'  
  },  
  {
    name: 'Бизнес',
    link: './img/business.jpg'  
  },  
];

const templateElement = document.querySelector('#template-element');
const container = document.querySelector('.elements');

const createItem = (item) => {
  const element = templateElement.content.querySelector('.elements__element').cloneNode(true);
  const image = element.querySelector('.elements__image');
  const cardName = element.querySelector('.elements__title');

  image.setAttribute('src', item.link);
  image.setAttribute('alt', item.name);
  cardName.textContent = item.name;

  return element;
};

const elements = cards.map(createItem);

container.append(...elements);