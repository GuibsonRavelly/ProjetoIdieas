const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')


db.serialize(function(){

//     //criar a tabela
//       db.run(`
//              CREATE TABLE IF NOT EXISTS ideas(
//                  id INTEGER PRIMARY KEY AUTOINCREMENT,
//                  image TEXT,
//                  titlle TEXT,
//                  category TEXT,
//                  description TEXT,
//                link TEXT


//              );


//              `)


//      //inserir dados na tabela

//      const query =`
//      INSERT INTO ideas(
//          image,
//          titlle,
//          category,
//          description,
//          link
//       ) VALUES (?,?,?,?,?)`

//       const values =  [
//          "src/programacao.png",
//          "Trabalhos",
//          "Estudos",
//          "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//          "https://www.linkedin.com/in/guibson-ravelly-4a2700140/"

//      ]

//       db.run( query, values , function(err){
//           if(err) return console.log(err)

//               console.log(this)

//   })

//      //consultar dados na tabela

//      db.all(`SELECT * FROM ideas`, function(err, rows){
//          if (err) return console.log(err)

//              console.log(rows)
//      })

    //deletar dados na tabela

//     db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
//          if(err) return console.log(err)

//              console.log("DELETEI NEGRO", this)
//      


})

module.exports = db