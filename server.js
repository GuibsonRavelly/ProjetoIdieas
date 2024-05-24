// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db")






//configura aquivos estaticos (css, scrip , imagens )

server.use(express.static("public" ))


// habilitar uso do req.body

server.use(express.urlencoded({ extend:true }))


// configuando nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache:true //boloean
})





//criei uma rota /
// e capturo o pedido do cliente pra responder

server.get("/",function(req, res) {

     db.all(`SELECT * FROM ideas`, function(err, rows){
         if (err) return

            const reverseIdeas = [...rows].reverse()
            let lastIdeas =[]
            for(let idea of reverseIdeas){
                if(lastIdeas.length < 2){
                    lastIdeas.push(idea)
                }
            }
           
            return res.render("index.html", {ideas: lastIdeas} )
     })

})

server.get("/ideias",function(req, res) {

    

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) {
            return res.send("Error no banco de dados")
        }
        const reverseIdeas = [...rows].reverse()
    return res.render("ideias.html",{ideas:reverseIdeas  } )
           
    })
})

server.post("/", function(req, res){

    const query =`
     INSERT INTO ideas(
        image,
         titlle,
         category,
         description,
         link
      ) VALUES (?,?,?,?,?)`

      const values =  [
         req.body.image,
         req.body.title,
         req.body.category,
         req.body.description,
         req.body.link,
     ]

      db.run( query, values , function(err){
        if (err) {
            return res.send("Error no banco de dados")
        }

         return res.redirect("/ideias")

      })

})




// liguei meu servidor na porta 3000
server.listen(3000 , function(){
    console.log("Boa GUIBSON")
    
})




