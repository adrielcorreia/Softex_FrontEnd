class Car {
    constructor(name, brand, price) {
        this.name = name
        this.brand = brand
        this.price = price
        this.color = ''
    }

    getName() {
        return `Nome do carro: ${this.name}`
    }

    getBrand() {
        return this.brand
    }

    getColor() {
        return `Cor: ${this.color}`
    }

    getPrice() {
        const real = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        const price = real.format(this.price)

        return `Valor: ${price}`
    }
 
    setPrice(cost) {
        this.price = cost
    }

    setColor(color) {
        this.color = color
    }
}

class Replicant {
    constructor(name, birthyear, isWorking) {
        const year = new Date().getFullYear()

        this.name = name
        this.age =  `${year - birthyear} anos`
        this.isWorking = isWorking ? 'Ativo' : 'Inativo'
        this.serial = Math.floor(Math.random() * (99999 + 10000) + 99999)
    }

    getName() {
        return `Nome do Replicante: ${this.name}`
    }

    getAge() {
        return `Idade do Replicante: ${this.age}`
    }

    getState() {
        return `Estado atual: ${this.isWorking}`
    }

    getSerial() {
        return `Serial: ${this.serial}`
    }
}

class systemOS {
    constructor(name, ram, memory) {
        this.name = name
        this.ram = ram
        this.memory = memory
    }

    getName() {
        return `Nome do Sistema Operacional: ${this.name}`
    }

    getRam() {
        return `Memória: ${this.ram} GB de Ram`
    }

    getMemory() {
        return `Armazenamento: ${this.memory} GB`
    }
}

class Game {
    constructor(name, ram, processor, memory, graphic) {
        this.name = name
        this.ram = ram
        this.processor = processor
        this.memory = memory
        this.graphic = graphic
    }

    getName() {
        return `Nome do Game: ${this.name}`
    }

    getRam() {
        return `Memória: ${this.ram} GB de RAM`
    }

    getProcessor() {
        return `Processador: ${this.processor}`
    }

    getMemory() {
        return `Armazenamento: ${this.memory} GB`
    }

    getGraphic() {
        return `Placa de vídeo: ${this.graphic}`
    }
}

const supra = new Car('Supra', 'Toyota', 700000)
const joe = new Replicant('Joe', 2004, false)
const windows = new systemOS('Windows 11', 4, 64)
const subnautica = new Game('Subnautica Below Zero', 8, 'Intel Core i3 4XXX series / AMD Ryzen 3 2.6ghz+', 15, 'Intel HD 530 ou superior')

supra.setPrice(381240.34)
supra.setColor('Vermelho')
console.log(supra.getName())
console.log(supra.getColor())
console.log(supra.getPrice(), '\n')

console.log(joe.getName())
console.log(joe.getAge())
console.log(joe.getState())
console.log(joe.getSerial(), '\n')

console.log(windows.getName())
console.log(windows.getRam())
console.log(windows.getMemory(), '\n')

console.log(subnautica.getName())
console.log(subnautica.getGraphic())
console.log(subnautica.getMemory())
console.log(subnautica.getProcessor())
console.log(subnautica.getRam())