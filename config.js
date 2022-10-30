export default {
  mongoDB: {
    uri: `mongodb://127.0.0.1:27017/pokemon`,
    options: {
      serverSelectionTimeoutMS: 5000,
    },
  },
};
