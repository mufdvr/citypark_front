export const HOTEL_MAIN = {
  url: '/hotel',
  title: 'Отель-люкс'
}
export const CATALOG = {
  url: HOTEL_MAIN.url + '/catalog',
  title: 'Каталог номеров'
}
export const DOCUMENTATION = {
  url: HOTEL_MAIN.url + '/documentation',
  title: 'Документация'
}
export const SINGLE_ROOM = {
  url: CATALOG.url + '/single',
  title: "Одноместные номера"
}
export const DOUBLE_ROOM = {
  url: CATALOG.url + '/double',
  title: "Двухместные номера"
}
export const VIP_ROOM = {
  url: CATALOG.url + '/vip',
  title: "VIP-номер"
}
