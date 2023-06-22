import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
router.post('/', userController.store);
router.get('/', loginRequired, userController.index);

router.get('/:id', userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
  Geralmente 5 funções por controller
  index -> listar todos os dados,
  store, create -> cria um novo dado,
  delete -> apaga um dado,
  show -> mostra somente um dado
  update -> atualiza um dado
*/
