import connection from '../database/connection';
import { BookType } from '../interface/bookType';
import BookModel from '../models/Book.model';

export default class BookService {
  private model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  async createBook(book: BookType) {
    const data = await this.model.createBook(book);

    return data;
  }
}
