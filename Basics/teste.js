

let Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "TITULO DA POSTAGEM",
    content: "oi"
})

// Postagem.sync({force: true})

let Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})