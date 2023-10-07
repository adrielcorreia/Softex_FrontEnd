const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_name', 'user', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

try {
    sequelize.authenticate()
    console.log('Conexão estabelecida com sucesso.')
}catch(err) {
    console.log('Incapaz de conectar com o database.')
}

module.exports = sequelize
//dará um erro pois essa não é a minha senha nem meu usuário, e por motivos óbvios eu não os colocarei kkkkkkk