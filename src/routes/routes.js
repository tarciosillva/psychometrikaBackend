const express = require("express")
const router = express.Router()

const SerieController = require('../controllers/serieController')

router.get('/serie', SerieController.listarSerie)
router.get('/capitulo/:titulo_capitulo', SerieController.listarConteudos)
router.post('/novoTituloMateria', SerieController.novoTituloMateria)
router.post('/novaOrdemMateria', SerieController.novaOrdemMateria)
router.get('/listarCapitulosAlunos', SerieController.listarCapitulosAlunos)
router.post('/modificarExibicaoCapitulosAlunos', SerieController.alterarExibiçãoCapitulosAlunos)

module.exports = router