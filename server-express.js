const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });
  const sql = "SELECT * FROM pessoa";
  con.query(sql, async (err, result) => {
    if (!err) {
      res.send(result);
    }
    console.log(err || "");
  });
});

app.post("/register", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });
  const sql = "INSERT INTO pessoa VALUES(null, 'OPA', '012222212')";
  con.query(sql, async (err, result) => {
    if (!err) {
      console.log(result);
      res.status(201).send();
    }
    console.log(err || "");
  });
});

// API de Delete não funcionando
app.delete("/delete/:id", (req, res) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST, //in dotenv
    user: process.env.DB_USER, //in dotenv
    password: undefined,
    database: process.env.DB_DATABASE, //in dotenv
  });
  const id = req.params.id;
  res.send("Conectado!");
  const sqlDelete = `DELETE FROM pessoa WHERE id_pessoa = ?`;
  con.query(sqlDelete, [id], async (err, result) => {
    if (!err) {
      console.log("Deletado" + JSON.stringify(result));
    }
    console.log(err || "");
  });
});
// API de Delete não funcionando

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
      console.log("Atualizado parcialmente:" + JSON.stringify(result));
    }
    console.log(err || "");
  });
});

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
      console.log("Atualizado parcialmente" + JSON.stringify(result));
    }
    console.log(err || "");
  });
});

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
      console.log("Atualizado parcialmente" + JSON.stringify(result));
    }
    console.log(err || "");
  });
});

app.listen(port, () => {
  console.log(`🚀 Rodando na porta: ${port}!`);
});
