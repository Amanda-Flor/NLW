//Servidor
const express = require ('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')//importando o nunjucks para a aplicação
nunjucks.configure(__dirname + '/views', {
    express: server,
    noCache: true,
})

//inicio e Configuração do servidor
server
//receber os dados do req.body no pages.js
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos
.use(express.static ("public"))
//
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

