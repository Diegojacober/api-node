import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

// multer({
//   fileFilter: (req, file, cb) {
//     file.mimetype:
//   }
// })

export default {
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Arquivo não permitido'), false);
    }
    return cb(null, true);
  },
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
