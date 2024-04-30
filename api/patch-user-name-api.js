const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

app.patch("/update/:id/:nm", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });
  const id = req.params.id;
  const new_nm_pessoa = req.params.nm;
  const sqlUpdate = `UPDATE pessoa SET nm_pessoa = ? WHERE id_pessoa = ?`;
  con.query(sqlUpdate, [new_nm_pessoa, id], (err, result) => {
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
