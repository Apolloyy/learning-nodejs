const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

//ao testar, utilizar node --watch --env-file .env "api/name.js"

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
app.listen(port, () => {
  console.log(`🚀 Rodando na porta: ${port}!`);
});
