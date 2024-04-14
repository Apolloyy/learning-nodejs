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
  con.query(sql, async (err, res) => {
    if (!err) {
      console.log(res);
    }
    console.log(err || "");
  });
  res.send("Conectado!");
});

app.listen(port, () => {
  console.log(`🚀 Rodando na porta: ${port}!`);
});
