import { Usuario } from '../models/Usuarios.js';
import { Categoria } from '../models/Categorias.js';
import { Producto } from '../models/Productos.js';

export async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'name', 'email', 'password','state'],
        });
        res.json(usuarios);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
};

export async function createUsuario(req, res) {
    console.log('Creating user', req.body);
    const { name, email, password, state } = req.body;
    try {
    const newUsuario = await Usuario.create(
        {
        name,
        email,
        password,
        state,
        },
        {
        fields: ['name', 'email', 'password', 'state'],
        }
    );
    return res.json(newUsuario);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function getUsuarioById(req, res) {
    const { id } = req.params;
    try {
    const usuario = await Usuario.findOne({
        where: { id },
    });
    return res.json(usuario);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function updateUsuario(req, res) {
    const { id } = req.params;
    const { name, email, password, state } = req.body;

    try {
    const usuario = await Usuario.findByPk(id);
    usuario.name = name;
    usuario.email = email;
    usuario.password = password;
    usuario.state = state;

    await project.save();

    return res.json(project);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
    await Usuario.destroy({
        where: { id },
    });
    await Categoria.destroy({
        where: { id },
    });
    await Producto.destroy({
        where: { id },
    });
    return res.sendStatus(204);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function getUsuarioCategorias(req, res) {
    const { id } = req.params;
    try {
    const categorias = await Categoria.findAll({
        attributes: ['id', 'name', 'user_id'],
        where: { user_Id: id },
    });
    const productos = await Producto.findAll({
        attributes: ['id', 'name', 'price', 'state', 'categoryId', 'userId'],
        where: { user_Id: id },
    });
    return res.json([categorias], [productos]);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}