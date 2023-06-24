require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: 'database',
  port: 3306,
  username: 'diego',
  password: '123456',
  database: 'escola',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: '+03:00',
  },
  timezone: '+03:00',
};
