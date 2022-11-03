const normalizr = require("normalizr");

const blogpost = {
  id: "1",
  title: "My blog post",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: "1",
    name: "John Doe",
  },
  comments: [
    {
      id: "1",
      author: "Rob",
      content: "Nice post!",
    },
    {
      id: "2",
      author: "Jane",
      content: "I totally agree with you!",
    },
    {
      id: "3",
      author: "Jane 2",
      content: "I totally agree!!",
    },
  ],
};
// * autores
const authorSchema = new normalizr.schema.Entity("authors");
const commentSchema = new normalizr.schema.Entity("comments");
const postSchema = new normalizr.schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema],
});

const util = require("util");

const normObj = normalizr.normalize(blogpost, postSchema);

console.log(util.inspect(normObj, false, 10, true));

const obj = {
  entities: {
    authors: { 1: { id: "1", name: "John Doe" } },
    comments: {
      1: { id: "1", author: "Rob", content: "Nice post!" },
      2: { id: "2", author: "Jane", content: "I totally agree with you!" },
      3: { id: "3", author: "Jane 2", content: "I totally agree!!" },
    },
    posts: {
      1: {
        id: "1",
        title: "My blog post",
        description: "Short blogpost description",
        content: "Hello world",
        author: "1",
        comments: ["1", "2", "3"],
      },
    },
  },
  result: "1",
};
const posts = obj.entities.posts;
const entities = obj.entities;
posts.map((post) => post.comments.map((i) => entities.comments[i]));
