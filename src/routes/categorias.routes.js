import { Router } from "express";
import { getCategoria, createCategoria, updateCategoria, deleteCategoria, getCategoriaById, categoriasConProductosPorUsuarioId } from '../controllers/categoria.controller.js';

export const router = Router();


//Routes
router.get('/', getCategoria);

router.post('/', createCategoria);

router.put('/:id', updateCategoria);

router.delete('/:id', deleteCategoria);

router.get('/:id', getCategoriaById);

router.get('/:userId/categorias&productos', categoriasConProductosPorUsuarioId);
