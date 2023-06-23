import { Router } from 'express';
import multer from 'multer';

import uploadController from '../controllers/UploadController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('file'), uploadController.store);

export default router;
