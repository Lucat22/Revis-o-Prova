const express = require('express')
const router = express.Router();

router.get('/alunos', (req, res) => {

    res.send('Obter todos os alunos');
});

router.post('/alunos', (req, res) => {
    const { nome, turma, notas } = req.body;

    res.send('Adicionar aluno: ${nome}, Turma: ${turma}, Notas: ${notas}')

});

module.exports = router;