require('dotenv').config();
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
console.log('ENV: ' + env)

import config from '../config/database';

const db = {};
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// sequelize
//   .sync()
//   .then(() => {
//     console.log('Database synchronized'); // eslint-disable-line no-console
//   })
//   .catch((error) => {
//     if (error) console.log('An error occured %j', error); // eslint-disable-line no-console
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;