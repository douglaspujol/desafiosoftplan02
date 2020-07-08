export function addTag(newTag) {
  return {
    type: '@tag/ADD',
    newTag,
  };
}
