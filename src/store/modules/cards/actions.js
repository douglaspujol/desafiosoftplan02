export function addCard(newCard) {
  return {
    type: '@card/ADD',
    payload: { newCard },
  };
}
export function addCardApi(newCard) {
  return {
    type: '@card/ADD_CARD_OF_API',
    payload: { newCard },
  };
}
export function addTagToCard(tag, idCard) {
  return {
    type: '@card/ADD_TAG_TO_CARD',
    payload: { tag, idCard },
  };
}
export function filtro(idTag) {
  return {
    type: '@card/FILTRO',
    payload: { idTag },
  };
}
export function filtroTodos() {
  return {
    type: '@card/FILTRO_TODOS',
  };
}
export function filtroInput(valueInput) {
  return {
    type: '@card/FILTRO_INPUT',
    payload: { valueInput },
  };
}
