const connection = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "coderhouse",
  },
};

export default connection;

class Container {
  constructor(config) {
    this.Knex = knex(config);
  }

  crearTabla() {}
}
