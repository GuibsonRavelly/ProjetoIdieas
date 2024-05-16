// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()


const ideas= [

    {
        img:"/public/src/programacao.png",
        title:"Trabalhos",
        category:"Estudos",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        url:"https://www.linkedin.com/in/guibson-ravelly-4a2700140/"
    },

    {
        img:"/public/src/objetivo.png",
        title:"Objetivo",
        category:"Execuçao",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        url:"https://www.linkedin.com/in/guibson-ravelly-4a2700140/"
    },

    {
        img:"/public/src/pequisa.png",
        title:"Resultado",
        category:"perfomace",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        url:"https://www.linkedin.com/in/guibson-ravelly-4a2700140/"
    },

    {
        img:"/public/src/pesquisa.png",
        title:"Resultado",
        category:"perfomace",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        url:"https://www.linkedin.com/in/guibson-ravelly-4a2700140/"
    },

 
]


//configura aquivos estaticos (css, scrip , imagens )

server.use(express.static("public" ))

// configuando nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache:true //boloean
})





//criei uma rota /
// e capturo o pedido do cliente pra responder

server.get("/",function(req, res) {

    
    return res.render("index.html", { ideas } )
})

server.get("/ideias",function(req, res) {
    return res.render("ideias.html")
})









// liguei meu servidor na porta 3000
server.listen(3000)


