import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.status(200).json('INDEX');
  }
}

export default new HomeController();
