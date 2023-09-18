import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Producto } from './Productos.js';

export const Categoria = sequelize.define('categorias', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    },
});

Categoria.hasMany(Producto, {
    foreignKey: 'categoryId',
});
