//first method to create an object
var samsung_tv = {
    brand: 'samsumg',
    model: 'TV Crystal 50" 4K UHD CU7700',
    cost: 'R$ 2.159,00'
}

console.log(`brand: ${samsung_tv.brand}\nmodel: ${samsung_tv.model}\ncost: ${samsung_tv.cost}\n`)

//second method to create an object
function Replicant (name, serial_number, model) {
    this.name = name;
    this.serial_number = serial_number;
    this.model = model;
}

const officer_k = new Replicant('Joe', 'KD6-3.7', 'Nexus-9')
console.log(`New Replicant was born! \nName: ${officer_k.name} \nSerial Number: ${officer_k.serial_number} \nModel: ${officer_k.model}`)

//third method to create an object
class God {
    constructor(father, son, holySpirit, atributes) {
        this.father = 'Yahweh',
        this.son = 'Christ'
        this.holySpirit = 'Advocate'
        this.atributes = [
            'simplicitas', 
            'immutabilitas', 
            'infinitas', 
            'immensitas', 
            'aeternitas', 
            'omnipraesenti']
    }
}