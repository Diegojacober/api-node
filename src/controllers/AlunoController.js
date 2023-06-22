import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    res.status(200).json('');
  }
}

export default new AlunoController();
