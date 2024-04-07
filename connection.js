import dotenv from "dotenv";
import mysql from "mysql";
dotenv.config();

//const of connection
const con = mysql.createConnection({
  host: process.env.DB_HOST, //in dotenv
  user: process.env.DB_USER, //in dotenv
  password: "",
  database: process.env.DB_DATABASE, //in dotenv
});

//connection
con.connect((err) => {
  if (err) {
    console.log("🗙 Erro ao conectar ao banco de dados", err);
    return;
  }
  console.log("✨ Conectado");
});

//query
con.query("SELECT * FROM Pessoa;", (err, res) => {
  if (err) {
    console.error("🗙 Erro ao executar a consulta:", err);
    return;
  }
  console.log(res);
});
