export function addTagToList(newTag) {
  return {
    type: '@tag/ADD',
    payload: { newTag },
  };
}
export function addTagApi(newTag) {
  return {
    type: '@tag/ADD_TAG_OF_API',
    payload: { newTag },
  };
}
