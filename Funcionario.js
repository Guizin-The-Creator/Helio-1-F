module.exports = class Funcionario {
    constructor(nome, horasTrabalhadas, valorHora, numeroFilhos) {
        this._nome = nome;
        this._horasTrabalhadas = horasTrabalhadas;
        this._valorHora = valorHora;
        this._numeroFilhos = numeroFilhos;
    }

    // Getters e Setters
    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set horasTrabalhadas(horasTrabalhadas) {
        this._horasTrabalhadas = horasTrabalhadas;
    }

    get horasTrabalhadas() {
        return this._horasTrabalhadas;
    }

    set valorHora(valorHora) {
        this._valorHora = valorHora;
    }

    get valorHora() {
        return this._valorHora;
    }

    set numeroFilhos(numeroFilhos) {
        this._numeroFilhos = numeroFilhos;
    }

    get numeroFilhos() {
        return this._numeroFilhos;
    }

    // Método para calcular o salário bruto
    calcularSalarioBruto() {
        return this._horasTrabalhadas * this._valorHora;
    }

    // Método para calcular o bônus baseado no número de filhos
    calcularBonus() {
        if (this._numeroFilhos > 3) {
            return this.calcularSalarioBruto() * (0.03 * (this._numeroFilhos - 3));
        }
        return 0;
    }

    // Método para calcular o salário total com bônus
    calcularSalarioTotal() {
        return this.calcularSalarioBruto() + this.calcularBonus();
    }

    // Método para exibir o resultado final
    exibirResultado() {
        const salarioBruto = this.calcularSalarioBruto();
        const bonus = this.calcularBonus();
        const salarioTotal = this.calcularSalarioTotal();

        return {
            nome: this._nome,
            salarioBruto: salarioBruto.toFixed(2),
            bonus: bonus.toFixed(2),
            salarioTotal: salarioTotal.toFixed(2),
        };
    }
};
