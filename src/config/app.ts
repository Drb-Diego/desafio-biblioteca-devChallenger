import express, { Express } from 'express';

export default (): Express => {
  const app = express();

  app.use(express.json());

  return app;
};
