import { Request, Response } from 'express';
import statusCode from 'http-status-codes';
import BookService from '../service/Book.service';

export default class BookController {
  private service: BookService;

  constructor() {
    this.service = new BookService();
  }

  async createBook(request: Request, response: Response) {
    const { body: bookInformation } = request;

    const bookCreated = await this.service.createBook(bookInformation);
    return response.status(statusCode.CREATED).json(bookCreated);
  }
}
