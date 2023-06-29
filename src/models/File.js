import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

export default class File extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo deve ser preenchido',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo deve ser preenchido',
          },
        },
      },
      url_image: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}:${appConfig.port}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'files',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
