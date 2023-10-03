class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta
        this.saldo = saldo
        this.tipo = tipo
        this.agencia = agencia
    }
}

const elon_musk = new Banco('nubank', 50, 'corrente', '00001')

const JSONData = JSON.stringify(elon_musk);
console.log(JSONData)