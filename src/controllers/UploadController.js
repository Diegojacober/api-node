import multer from 'multer';
import multerConfig from '../config/multer';
import File from '../models/File';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('photo');

class UploadController {
  async index(req, res) {
    res.status(200).json('index');
  }

  store(req, res) {
    // eslint-disable-next-line consistent-return
    return upload(req, res, async (err) => {
      const { aluno_id } = req.body;

      if (!aluno_id) {
        return res.status(400).json({
          error: ['Id aluno missing'],
        });
      }

      const aluno = await Aluno.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno not exists'],
        });
      }

      if (err) {
        res.status(400).json({
          erros: [err.field],
        });
      }

      if (!req.file) {
        return res.status(400).json({
          error: ['Send a photo'],
        });
      }
      const { originalname, filename } = req.file;
      const file = await File.create({ originalname, filename, aluno_id });
      res.status(200).json(file);
    });
  }
}

export default new UploadController();
