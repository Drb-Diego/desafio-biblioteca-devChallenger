import express from 'express';
import bookRoutes from '../routes/book.routes';

const app = express();

app.use(express.json());
app.use(bookRoutes);

export default app;
