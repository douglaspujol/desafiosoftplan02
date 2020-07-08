import produce from 'immer';

export default function tags(state = [], action) {
  switch (action.type) {
    case '@tag/ADD':
      return produce(state, (draft) => {
        draft.push(action.newTag);
      });

    default:
      return state;
  }
}
