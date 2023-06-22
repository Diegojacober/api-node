import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, email, password } = user;
      return res.status(200).json({ id, email, password });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(404).json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          error: ['Informe o id de qual usuário deseja atualizar'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          error: ['Usuário inexistente'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, email, password } = novosDados;
      return res.status(200).json({ id, email, password });
    } catch (error) {
      return res.status(500).json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: ['Informe o id de qual usuário deseja atualizar'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          error: ['Usuário inexistente'],
        });
      }

      await user.destroy();
      return res.status(404).json(null);
    } catch (error) {
      console.log(error);
      return res.status(500).json(null);
    }
  }
}

export default new UserController();
