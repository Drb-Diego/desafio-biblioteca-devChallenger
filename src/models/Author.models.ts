import { Pool } from 'mysql2/promise';
import { v4 } from 'uuid';

export default class AuthorModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(authors: string[]) {
    const sqlCreateAuthor = 'INSERT author(id, name) VALUES (?, ?)';

    await authors.forEach((author) => {
      this.connection.execute(sqlCreateAuthor, [v4(), author]);
    });
  }
}
