let express = require('express')
const app = express()
const handlebars = require('express-handlebars')
// Config
    // Handlebars config
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Sequelize Config
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize(
            'teste', // ? Nome da DATABASE
            'root', // Nome do usuário
            'wEverT0n81$', // Senha para entrar na DATABASE
            {
                host: "localhost", // Onde o servidor está localizado
                dialect: "mysql" // Qual o tipo do banco de dados
            }
        )


app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send('FORMULÁRIO RECEBIDO')
})


app.listen(7070, (req, res) => {
    console.log("Servidor rodando")
})