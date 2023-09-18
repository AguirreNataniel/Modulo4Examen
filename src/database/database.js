import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'usuarios', // db name
  'postgres', // username
  'postgres', // password
    {
    host: 'localhost',
    dialect: 'postgres',
    }
);