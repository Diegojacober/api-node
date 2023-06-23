import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import authRoutes from './src/routes/auth';
import alunoRoutes from './src/routes/aluno';
import uploadRoutes from './src/routes/upload';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/auth/', authRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/upload/', uploadRoutes);
  }
}

export default new App().app;
