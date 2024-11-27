import express from 'express';
import { postsController, livroController } from '../controllers/controllers.js';

const routes = (app) => {
  app.use(express.json());

  app.get('/posts', postsController);
  // Rota alternativa sugerida pela Luri
  app.get('/livro', livroController);
};

export default routes;
