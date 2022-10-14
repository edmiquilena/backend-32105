import knex from "knex";
class DBContainer {
  // * get, post, put, delete
  // * CRUD
  constructor(config, tabla) {
    this.knex = knex(config);
    this.table = tabla;
  }

  async getAll() {
    try {
      return await this.knex.select("*").from(this.table);
    } catch (e) {
      throw new Error(e);
    }
  }

  async getbyId(id) {
    try {
      return await this.knex.select("*").from(this.table).where({ id });
    } catch (e) {
      throw new Error(e);
    }
  }

  // * PUT
  async updateEntry(obj, id) {
    try {
      return await this.knex.from(this.table).where("id", id).update(obj);
    } catch (e) {
      throw new Error(e);
    }
  }

  async reduceStock(num, id) {
    try {
      return await this.knex
        .from(this.table)
        .where("id", id)
        .update({ stock: num });
    } catch (e) {
      throw new Error(e);
    }
  }
  async InsertValue(obj) {
    try {
      return await this.knex.insert(obj).into(this.table);
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteEntry(id) {
    try {
      return await this.knex.from(this.table).where({ id }).del();
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default DBContainer;
