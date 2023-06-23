import { Router } from 'express';
import uploadController from '../controllers/UploadController';

const router = new Router();

router.post('/', uploadController.store);

export default router;
