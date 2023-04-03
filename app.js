const express = require('express');
const app = express();
const usuario = require('./usuario');

// get para as informações do usuario
app.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: usuario.nome + " " + usuario.cpf + " " + usuario.data_nascimento
    })
});

app.post ('/post/nome/:id_novo_nome', (req, res, next) => {
    const new_name = req.params.id_novo_nome;
    usuario.atualizar_nome(new_name)
    res.status(201).send({
        mensagem:"Nome atualizado"
    })
})

app.post('/post/cpf/:id_novo_cpf', (req, res, next)=> {
    const new_cpf = req.params.id_novo_cpf;
    usuario.atualizar_cpf(new_cpf)
    res.status(201).send({
        mensagem:"CPF atualizado"
    })
})

app.post('/post/data/:id_nova_data', (req, res, next)=> {
    const new_date = req.params.id_nova_data;
    usuario.atualizar_dataNascimento(new_date)
    res.status(201).send({
        mensagem:"Data de nascimento atualizada"
    })
})




module.exports = app; 