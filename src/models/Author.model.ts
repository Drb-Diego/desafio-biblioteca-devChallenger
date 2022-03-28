import { Pool } from 'mysql2/promise';
import { v4 } from 'uuid';

export default class AuthorModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(authors: string[]) {
    const sqlCreateAuthor = 'INSERT author(id, name) VALUES (?, ?)';
    const idsAuthors: string[] = [];

    await authors.forEach((author, index) => {
      idsAuthors.push(v4());
      this.connection.execute(sqlCreateAuthor, [idsAuthors[index], author]);
    });

    return idsAuthors;
  }
}
