import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();

      return res.status(200).json(alunos);
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: ['Id missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno not exists'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: ['Id missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno not exists'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: ['Id missing'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno not exists'],
        });
      }

      await aluno.destroy();
      return res.status(204).json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
