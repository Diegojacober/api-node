import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error: ['Login required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.UserId = id;
    req.UserEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      error: ['Token expirado ou inválido.'],
    });
  }
};
