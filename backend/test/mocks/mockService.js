const getComments = [{ id: "1", content: "🤔" }, { id: "2", content: "🤨" }];

const deleteComment = 1;

const createComment = {
  content: "🤓",
  authorId: "1"
};

const findAll = () => getComments;
const destroy = () => deleteComment;
const create = () => createComment;

module.exports = { findAll, destroy, create };
