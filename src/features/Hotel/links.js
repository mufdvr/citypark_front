export const HOTEL_MAIN = {
  URL: '/hotel',
  TITLE: 'Отель-люкс'
}
export const CATALOG = {
  URL: HOTEL_MAIN.URL + '/katalog-nomerov',
  TITLE: 'Каталог номеров'
}
export const DOCUMENTATION = {
  URL: HOTEL_MAIN.URL + '/test0',
  TITLE: 'Документация'
}
export const SINGLE_ROOM = {
  URL: CATALOG.URL + '/odnomestnyie',
  TITLE: "Одноместные номера"
}
export const DOUBLE_ROOM = {
  URL: CATALOG.URL + '/dvuxmestnyie-nomera.html',
  TITLE: "Двухместные номера"
}
export const VIP_ROOM = {
  URL: CATALOG.URL + '/vip',
  TITLE: "VIP-номер"
}
