const Funcionario = require('../model/Funcionario'); 

module.exports = class ControlFuncionario {
    controle_get_calcular_salario(request, response) {
        // Recupera os parâmetros passados pela URI
        const nome = request.params.nome;
        const horasTrabalhadas = parseFloat(request.params.horasTrabalhadas);
        const valorHora = parseFloat(request.params.valorHora);
        const numeroFilhos = parseInt(request.params.numeroFilhos, 10);

        // Instância da classe Funcionario
        const funcionario = new Funcionario(nome, horasTrabalhadas, valorHora, numeroFilhos);
        
        // Calcula os resultados
        const resultado = funcionario.exibirResultado();

        // Retorna o nome, salário bruto, bônus e salário total
        response.status(200).send({
            nome: resultado.nome,
            salarioBruto: resultado.salarioBruto,
            bonus: resultado.bonus,
            salarioTotal: resultado.salarioTotal
        });
    }
};
