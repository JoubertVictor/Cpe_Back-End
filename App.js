//importa a biblioteca
const express = require("express");

//starta a biblioteca
const app = express();

//Define rota e funções que cada parte faz
app.get("", (req, res) => {
  return res.json({
    message :"Hello World!"
  })
})

app.get("/cadastro", (req, res) => {
  return res.json({
    message: "Função de Cadastro"
  })
})

app.get("/login", (req, res) => {
  return res.json({
    message: "Função de Login"
  })
})

app.get("/home", (req, res) => {
  return res.json({
    message: "Função de Home"
  })
})

app.get("/seccao", (req, res) => {
  return res.json({
    message: "Função de Seccao"
  })
})

app.listen(8000, () => console.log("Servidor Rodando!"));
