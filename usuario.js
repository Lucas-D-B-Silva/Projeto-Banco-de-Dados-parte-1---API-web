const express = require('express');

const usuario = {
    nome: " ",
    cpf: " ",
    data_nascimento: " ",

    atualizar_nome(novo_nome){
        this.nome = novo_nome;
    },

    atualizar_cpf(novo_cpf){
        this.cpf = novo_cpf;
    },

    atualizar_dataNascimento(nova_data){
        this.data_nascimento = nova_data;
    }

}


module.exports = usuario; 