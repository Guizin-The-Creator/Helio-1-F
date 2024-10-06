const express = require('express');
const ControlFuncionario = require('../control/ControlFuncionario'); // Certifique-se de que o nome do arquivo esteja correto
const MiddlewareFuncionario = require('../middleware/MiddlewareFuncionario'); // Atualizar a importação para o middleware correto

module.exports = class RouterFuncionario {
    criarRotasFuncionario() {
        this._router = express.Router();
        this._controleFuncionario = new ControlFuncionario(); // Instância da classe ControlFuncionario
        this._middlewareFuncionario = new MiddlewareFuncionario(); // Instância do middleware para validar dados

        // Trata a rota GET: /funcionario/:nome/:horasTrabalhadas/:valorHora/:numeroFilhos
        this._router.get('/:nome/:horasTrabalhadas/:valorHora/:numeroFilhos',
            this._middlewareFuncionario.validar_dados_funcionario, // Valida se os dados do funcionário são válidos
            this._controleFuncionario.controle_get_calcular_salario // Chama o controlador para calcular salário
        );

        return this._router;
    }
};
