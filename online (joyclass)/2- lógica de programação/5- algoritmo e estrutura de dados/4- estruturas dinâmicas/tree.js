let patriarcas = {
    firstSon: {
        name: 'Ismael'
    },

    secondSon: {
        name: 'Isaque',

        fSon: { // first son of Isaque
            name: 'Esaú'
        },

        sSon: { // second son of Isaque
            name: 'Jacó'
        }
    },

    name: 'Abraão'
}

function preOrder(tree) {
    console.log(tree.name);

    tree.firstSon && preOrder(tree.firstSon);
    tree.secondSon && preOrder(tree.secondSon);
}

preOrder(patriarcas);