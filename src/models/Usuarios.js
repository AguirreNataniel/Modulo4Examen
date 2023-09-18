import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categorias.js';
import { Producto } from './Productos.js';


export const Usuario = sequelize.define('usuarios',
{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'nombre del usuario',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'el correo electrónico',
    },
    password: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
},
{
    timestamps: false,
});

Usuario.hasMany(Categoria, {
    foreignKey: 'user_id',
});

Usuario.hasMany(Producto, {
    foreignKey: 'user_id',
});

