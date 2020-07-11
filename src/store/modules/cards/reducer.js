import produce from 'immer';

export const INITIAL_STATE = {
  cardList: [],
  filtro: [],
};

export default function tags(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@card/ADD_CARD_OF_API': {
        draft.cardList.push(...action.payload.newCard);
        break;
      }
      case '@card/ADD': {
        draft.cardList.push(action.payload.newCard);
        break;
      }
      case '@card/ADD_TAG_TO_CARD': {
        const { tag, idCard } = action.payload;

        const index = draft.cardList.findIndex(
          (element) => element.id === idCard
        );

        draft.cardList[index].tags.push(tag);

        break;
      }
      case '@card/FILTRO': {
        const { idTag } = action.payload;

        const filter = draft.cardList.filter((e) =>
          e.tags.some((tag) => tag.id === idTag)
        );

        draft.filtro = [...filter];

        break;
      }

      case '@card/FILTRO_TODOS': {
        draft.filtro.splice(0, draft.filtro.length);
        break;
      }
      case '@card/FILTRO_INPUT': {
        const { valueInput } = action.payload;

        const filter = draft.cardList.filter((e) =>
          e.partes.ativa.name.startsWith(valueInput)
        );

        draft.filtro = [...filter];

        break;
      }
      default:
    }
  });
}
