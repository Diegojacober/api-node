import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('photo');

class UploadController {
  async index(req, res) {
    res.status(200).json('index');
  }

  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        res.status(400).json({
          erros: [err.field],
        });
      }
      res.status(200).json(req.file);
    });
  }
}

export default new UploadController();
