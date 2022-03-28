import { Pool } from 'mysql2/promise';

export default class BookAuthorModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(authorsIds: string[], bookId: string) {
    const sqlBookAuthors = 'INSERT book_author(authorId, bookId) VALUES(?, ?)';

    await authorsIds.forEach((authorId) => {
      this.connection.execute(sqlBookAuthors, [authorId, bookId]);
    });
  }
}
