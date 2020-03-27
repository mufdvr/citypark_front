export const toPayload = (state, payload) => ({
  ...state,
  fetching: null,
  payload
})

export const baseUrl = () => {
  const { protocol, host } = window.location
  return protocol + "//" + host
}

export const filterCart = cart =>
  cart && cart.map(item => ({
    dish_id: item.id,
    dish_count: item.count
  }))

export const cartTotal = cart =>
  cart.reduce((sum, item) => sum += item.discount ? item.cost * item.count : (item.cost * item.count) * parseFloat(process.env.REACT_APP_DISCOUNT_BY_TAKEAWAY), 0)

export const transliterate = (text, engToRus) => {
  const rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g)
  const eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)
  let x
  for (x = 0; x < rus.length; x++) {
    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase())
  }
  return text.replace(/\s+/g, '_').toLowerCase()
}
