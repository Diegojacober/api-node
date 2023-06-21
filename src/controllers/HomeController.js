import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Diego',
      sobrenome: 'Alencar Jacober',
      email: 'diego@email.com',
      idade: 18,
      peso: 500,
      altura: 2.5,
    });

    res.status(200).json(aluno);
  }
}

export default new HomeController();
