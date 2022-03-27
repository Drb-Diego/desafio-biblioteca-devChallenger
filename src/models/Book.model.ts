import { Pool } from 'mysql2/promise';
import { v4 } from 'uuid';
import { BookType } from '../interface/bookType';
import AuthorModel from './Author.models';
import PublisherModel from './Publisher.model';

export default class BookModel {
  private connection: Pool;
  private publisherModel: PublisherModel;
  private authorModel: AuthorModel;

  constructor(connection: Pool) {
    this.connection = connection;
    this.publisherModel = new PublisherModel(connection);
    this.authorModel = new AuthorModel(connection);
  }

  async createBook(book: BookType) {
    const { authors, title, publisher, image } = book;

    await this.publisherModel.create(publisher);
    const [publisherFinded] = await this.publisherModel.getByName(publisher);

    const sqlCreateBook = `
      INSERT book(id, title, image, publisherId)
      VALUES (?, ?, ?, ?)
    `;

    const idBook = v4();
    await this.connection.execute(sqlCreateBook, [idBook, title, image, publisherFinded.id]);
    await this.authorModel.create(authors);

    return { idBook, title, publisher, image, authors };
  }
}
