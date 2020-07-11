import produce from 'immer';

export const INITIAL_STATE = {
  tagList: [],
};
export default function tags(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@tag/ADD': {
        draft.tagList.push(action.payload.newTag);
        break;
      }
      case '@tag/ADD_TAG_OF_API': {
        draft.tagList.push(...action.payload.newTag);
        break;
      }
      default:
    }
  });
}
