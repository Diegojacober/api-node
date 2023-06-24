import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import File from '../models/File';

const models = [Aluno, User, File];

const connection = new Sequelize(databaseConfig);

// connection.sync(() => console.log('Banco de dados ok'));

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
