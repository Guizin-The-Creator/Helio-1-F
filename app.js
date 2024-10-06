const express = require('express');
const RouterFuncionario = require('./router/RouterFuncionario'); 
const app = express();
const portaServico = 3000;

// Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

const roteadorFuncionario = new RouterFuncionario(); 
// Caso chegue uma requisição para /funcionario
app.use('/funcionario', roteadorFuncionario.criarRotasFuncionario()); 
// Inicia a espera por requisições HTTP
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/funcionario`); 
});
