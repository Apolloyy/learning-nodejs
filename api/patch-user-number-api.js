const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

//ao testar, utilizar node --watch --env-file .env "api/name.js"

app.patch("/update/:id/:nr", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });
  const id = req.params.id;
  const new_nr_pessoa = req.params.nr;
  const sqlUpdate = `UPDATE pessoa SET nr_pessoa = ? WHERE id_pessoa = ?`;
  con.query(sqlUpdate, [new_nr_pessoa, id], (err, result) => {
    if (!err) {
      res.status(204).send();
      console.log("Atualizado parcialmente: " + JSON.stringify(result));
    }
    console.log(err || "");
  });
});

app.listen(port, () => {
  console.log(`🚀 Rodando na porta: ${port}!`);
});
