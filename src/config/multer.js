import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // erro para mostrar, onde ficara o file
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // erro, nome do arquivo
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
