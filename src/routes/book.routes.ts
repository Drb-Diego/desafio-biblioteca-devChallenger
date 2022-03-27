import { Router } from 'express';
import BookController from '../controllers/Book.controller';

const routes = Router();

const controllers = new BookController();

routes.post(
  '/obras',
  (request, response) => controllers.createBook(request, response),
);

export default routes;
