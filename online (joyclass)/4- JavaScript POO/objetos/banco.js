class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta
        this.saldo = saldo
        this.tipo = tipo
        this.agencia = agencia
    }

    get_saldo() {
        return this.saldo
    }

    depositar(deposito) {
        this.saldo += deposito
        return console.log(`Depósito de R$ ${deposito} realizado com sucesso`)
    }

    sacar(saque) {
        this.saldo -= saque
        return console.log(`Saque de R$ ${saque} realizado com sucesso`)
    }

    get_numero_conta() {
        return this.conta
    }
}

const napoleao = new Banco('9999999', 100.00, 'corrente', '00001')

console.log(`Saldo: R$ ${napoleao.get_saldo()}`)
napoleao.depositar(50)
console.log(`Saldo: R$ ${napoleao.get_saldo()}`)
napoleao.sacar(25)
console.log(`Saldo: R$ ${napoleao.get_saldo()}`)
console.log('Número da conta:', napoleao.get_numero_conta())