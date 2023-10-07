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

const list = [
    {
        word: "guepardo",
        hint: "o felino mais rápido do mundo"
    },
    {
        word: "crocodilo",
        hint: "réptil aquático"
    }
]

const JSONList = JSON.stringify(list)