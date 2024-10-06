module.exports = class MiddlewareFuncionario {
    validar_dados_funcionario(request, response, next) {
        const nome = request.params.nome;
        const horasTrabalhadas = parseFloat(request.params.horasTrabalhadas);
        const valorHora = parseFloat(request.params.valorHora);
        const numeroFilhos = parseInt(request.params.numeroFilhos, 10);

        // Verifica se os parâmetros são válidos
        if (!nome || isNaN(horasTrabalhadas) || isNaN(valorHora) || isNaN(numeroFilhos)) {
            const objResposta = {
                status: false,
                msg: "Todos os campos são obrigatórios e devem ser válidos: nome, horas trabalhadas, valor da hora e número de filhos.",
            };
            return response.status(400).send(objResposta);
        }

        // Verifica se as horas trabalhadas e o valor por hora são valores positivos
        if (horasTrabalhadas <= 0 || valorHora <= 0) {
            const objResposta = {
                status: false,
                msg: "Horas trabalhadas e valor por hora devem ser maiores que zero.",
            };
            return response.status(400).send(objResposta);
        }

        // Verifica se o número de filhos é um número não-negativo
        if (numeroFilhos < 0) {
            const objResposta = {
                status: false,
                msg: "O número de filhos deve ser um valor igual ou maior que zero.",
            };
            return response.status(400).send(objResposta);
        }

        next(); // Chama o próximo middleware ou rota
    }
};
