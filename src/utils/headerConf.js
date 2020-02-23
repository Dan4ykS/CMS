const mainItems = [
  { name: '/', value: 'Главная' },
  { name: '/ProductPage/', value: 'Продукция' },
  { name: '/CustomizingPage/', value: 'Фичи' },
];

const topItems = [
  { name: '/Login', value: 'Вход' },
  { name: '/CartPage/', value: 'Корзина' },
];

const iconsForItems = [
  { className: 'fas fa-user-circle', link: '/Login' },
  { className: 'fas fa-cart-plus', link: '/CartPage/' },
];

export { mainItems, topItems, iconsForItems };