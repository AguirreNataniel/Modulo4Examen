import { Categoria } from '../models/Categorias.js'
import { Producto } from '../models/Productos.js'

export async function getCategoria(req, res) {
    try {
    const categorias = await Categoria.findAll({
        attributes: ['id',  'name', 'user_id'],
    });

    res.json(categorias);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function createCategoria(req, res) {
    const { name, user_id } = req.body;
    try {
    const newCategoria = await Categoria.create({
        name,
        user_id,
    });
    res.json(newCategoria);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function updateCategoria(req, res) {
    const { id } = req.params;

    try {
    const categoria = await Categoria.findOne({
        attributes: ['id','name', 'user_id', ],
        where: { id },
        });
        
    categoria.set(req.body);

    await categoria.save();

    return res.json(categoria);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function deleteCategoria(req, res) {
    const { id } = req.params;
    try {
    await Categoria.destroy({
        where: { user_id: id },
    });
    return res.sendStatus(204);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function getCategoriaById(req, res) {
    const { id } = req.params;
    try {
    const categoria = await Categoria.findOne({
        where: { id },
    });
    return res.json(categoria);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function categoriasConProductosPorUsuarioId(req, res) {
    const { userId } = req.params;
    try {
    const response = await Categoria.findAll({
        where: { userId },
        include: [
        {
            model: Producto,
        },
        ],
    });
    res.json('relacion de tablas');
}
    catch (error) {
    res.status(500).json({
        message: error.message,
    });
}
}