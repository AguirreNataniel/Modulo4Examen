import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const Producto = sequelize.define('productos', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Nombre del producto',
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Precio unitario',
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
