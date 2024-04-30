const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

app.put("/update/:id/:nm/:nr", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });

  const id = req.params.id;
  const new_nm_pessoa = req.params.nm;
  const new_nr_pessoa = req.params.nr;

  const sqlUpdate = `UPDATE pessoa SET nm_pessoa = ?, nr_pessoa = ? WHERE id_pessoa = ?`;
  con.query(sqlUpdate, [new_nm_pessoa, new_nr_pessoa, id], (err, result) => {
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
