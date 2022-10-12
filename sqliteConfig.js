const sqliteConfig = {
  client: "sqlite3",
  connection: {
    filename: "./DB/coderdb.sqlite",
  },
  useNullAsDefault: true,
};
export default sqliteConfig;
