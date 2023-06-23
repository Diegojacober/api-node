class UploadController {
  async index(req, res) {
    res.status(200).json('index');
  }

  async store(req, res) {
    res.status(200).json(req.file);
  }
}

export default new UploadController();
