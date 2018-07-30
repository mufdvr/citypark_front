export const HOTEL_MAIN = {
  URL: '/hotel',
  TITLE: 'Отель-люкс'
}
export const CATALOG = {
  URL: HOTEL_MAIN.URL + '/catalog',
  TITLE: 'Каталог номеров'
}
export const DOCUMENTATION = {
  URL: HOTEL_MAIN.URL + '/documentation',
  TITLE: 'Документация'
}
export const SINGLE_ROOM = {
  URL: CATALOG.URL + '/single',
  TITLE: "Одноместные номера"
}
export const DOUBLE_ROOM = {
  URL: CATALOG.URL + '/double',
  TITLE: "Двухместные номера"
}
export const VIP_ROOM = {
  URL: CATALOG.URL + '/vip',
  TITLE: "VIP-номер"
}
