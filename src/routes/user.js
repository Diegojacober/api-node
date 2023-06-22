import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
  Geralmente 5 funções por controller
  index -> listar todos os dados,
  store, create -> cria um novo dado,
  delete -> apaga um dado,
  show -> mostra somente um dado
  update -> atualiza um dado
*/
