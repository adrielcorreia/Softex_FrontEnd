class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.son = null, null
    }
}

class Patriarcas {
    constructor(head = null) {
        this.head = head;
    }
}

let Abraao = new Person('Abraão', 175);
let Isaque = new Person('Isaque', 180);
let Jaco = new Person('Jacó', 147);
let Jose = new Person('José', undefined);

Abraao.son = Isaque;
Isaque.son = Jaco;
Jaco.son = Jose;

let patriarcas = new Patriarcas(Abraao);

console.log(`Os patriarcas e seus filhos:

${patriarcas.head.name} teve a ${patriarcas.head.son.name}, e viveu ${patriarcas.head.name} ${patriarcas.head.age} anos
${patriarcas.head.son.name} teve a ${patriarcas.head.son.son.name} e viveu ${patriarcas.head.son.name} ${patriarcas.head.son.age} anos
${patriarcas.head.son.son.name} teve a ${patriarcas.head.son.son.son.name} e viveu ${patriarcas.head.son.son.name} ${patriarcas.head.son.son.age} anos
`);