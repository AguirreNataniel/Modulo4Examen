import { Router } from "express";
import { getProducto, createProducto, getProductoById, updateProducto, deleteProducto, } from '../controllers/producto.controller.js';

export const router = Router();


//Routes
router.get('/', getProducto);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

router.get('/:id', getProductoById);
