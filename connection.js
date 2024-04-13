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

//insert
const nm_pessoa = "Rafael";
const nr_numero = 222222222;
const sql = `INSERT INTO pessoa (nm_pessoa, nr_pessoa) VALUES (?, ?)`;
con.query(sql, [nm_pessoa, nr_numero], (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Inserção bem sucedida!");
});

//delete
const id_delete = 9;
const sqlDelete = `DELETE FROM pessoa WHERE id_pessoa = ?`;
con.query(sqlDelete, [id_delete], (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Deletado");
});

//update
const id_update = 10;
const new_nm_pessoa = "Apollo";
const sqlUpdate = `UPDATE pessoa SET nm_pessoa = ? WHERE id_pessoa = ?`;
con.query(sqlUpdate, [new_nm_pessoa, id_update], (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Atualizado");
});

//select with where
con.query(
  "SELECT * FROM Pessoa WHERE id_pessoa = ?;",
  [id_delete],
  (err, res) => {
    if (err) {
      console.error("🗙 Erro ao executar a consulta:", err);
      return;
    }
    console.log(res);
  }
);

con.query(
  "SELECT * FROM Pessoa WHERE id_pessoa = ?;",
  [id_update],
  (err, res) => {
    if (err) {
      console.error("🗙 Erro ao executar a consulta:", err);
      return;
    }
    console.log(res);
  }
);
