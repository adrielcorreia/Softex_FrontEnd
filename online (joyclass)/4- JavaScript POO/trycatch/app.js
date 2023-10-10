function mult(n1, n2) {
    try {
        if (typeof(n1) != 'number' || typeof(n2) != 'number') {
            throw 'Algum número não foi digitado corretamente!'
        }

    } catch (err) {
        console.log(err)

    } finally {
        console.log(`${n1} x ${n2} = ${n1*n2}`)
    }
}

mult(2, 'oi')
mult(4, 0)
mult(7, 7)