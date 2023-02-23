import express from "express";
import AutorController from "../controllers/autoreController.js";

const router = express.Router();

router
    .get('/autores', AutorController.listarAutores)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .get('/autores/:id', AutorController.listarAutorPorId)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router;