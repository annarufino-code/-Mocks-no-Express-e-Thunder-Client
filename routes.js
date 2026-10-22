const { Router } = require('express');
const { z } = require('zod');
const validate = require('../middlewares/validate');
const boxController = require('../controllers/boxControllers');


const router = Router();


// --- GET /api/categorias ---
router.get('/categorias', boxController.listarCategorias);


// --- GET /api/boxes 
const listarBoxesSchema = z.object({
  query: z.object({
    busca: z.string().optional(),
    categoriaId: z.string().uuid("Categoria ID inválido").optional()
  })
});


router.get('/boxes', validate(listarBoxesSchema), boxController.listarBoxes);


// --- POST /api/boxes
const criarBoxSchema = z.object({
  body: z.object({
    nome: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
    numeroBox: z.string().min(1, "Número do box é obrigatório"),
    categoriaId: z.string().uuid("Categoria inválida")
  })
});


router.post('/boxes', validate(criarBoxSchema), boxController.criarBox);


module.exports = router;