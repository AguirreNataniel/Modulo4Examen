import { Router } from "express";
import { getUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario, getUsuarioCategorias } from '../controllers/usuario.controller.js';


export const router = Router();


//Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id', getUsuarioById);

router.get('/:id/categorias&productos', getUsuarioCategorias);

router.post('/login', )