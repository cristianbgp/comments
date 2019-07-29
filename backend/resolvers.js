module.exports = {
  Author: {
    comments: (parent, args, context, info) => parent.getComments()
  },
  Comment: {
    author: (parent, args, context, info) => parent.getAuthor()
  },
  Query: {
    comments: (parent, args, { db }, info) => db.comment.findAll(),
    authors: (parent, args, { db }, info) => db.author.findAll(),
    comment: (parent, { id }, { db }, info) => db.comment.findByPk(id),
    author: (parent, { id }, { db }, info) => db.author.findByPk(id)
  },
  Mutation: {
    createComment: (parent, { content, authorId }, { db }, info) =>
      db.comment.create({
        content: content,
        authorId: authorId
      }),
    updateComment: (parent, { content, id }, { db }, info) =>
      db.comment.update(
        {
          content: content
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteComment: (parent, { id }, { db }, info) =>
      db.comment.destroy({
        where: {
          id: id
        }
      }),
    createAuthor: (parent, { username, comments }, { db }, info) =>
      db.author.create({
        username: username
      })
  }
};
