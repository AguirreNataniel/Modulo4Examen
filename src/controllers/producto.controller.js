//import { Usuario } from '../models/Usuarios.js';
//import { Categoria } from '../models/Categorias.js';
import { Producto } from '../models/Productos.js';


export async function getProducto(req, res) {
    try {
        const productos = await Producto.findAll({
            attributes: ['id', 'name', 'price', 'state', 'categoryId', 'userId' ],
            order: [['id', 'DESC']],
        });
        res.json(productos);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
};

export async function createProducto(req, res) {
    console.log('Creating product', req.body);
    const { name, price, state, categoryId, userId } = req.body;
    try {
    const newProducto = await Producto.create(
        {
        name,
        price,
        state,
        categoryId,
        userId
        },
        {
        fields: ['name', 'price', 'state', 'categoryId', 'userId'],
        }
    );
    return res.json(newProducto);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function getProductoById(req, res) {
    const { id } = req.params;
    try {
    const producto = await Producto.findOne({
        where: { id },
    });
    return res.json(producto);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function updateProducto(req, res) {
    const { id } = req.params;
    const { name, price, state, categoryId, userId } = req.body;

    try {
    const producto = await Producto.findByPk(id);
    producto.name = name;
    producto.price = price;
    producto.state = state;
    producto.categoryId = categoryId;
    producto.userId = userId;

    await producto.save();

    return res.json(producto);
    } catch (error) {
    res.status(500).json({
        message: error.message,
    });
    }
}

export async function deleteProducto(req, res) {
    const { id } = req.params;
    try {
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
