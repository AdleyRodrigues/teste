//imports
const express = require("express");//arquivo de requests e responses
const app = express();//criando uma instancia do express
const bodyParser = require("body-parser");//usado para receber os dados do form
const conta = require('./models/Conta');
//configs
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
/*
app.get("/",(req,res)=>{
  res.send("Welcome to the site!");//essa função seria apenas para exibir uma mensagem na tela quando chamasse o localhost
});*/
app.get("/",function(req,res){//rota get pode ser acessada pela URL
  res.sendFile(__dirname+"/views/index.html");
});

app.post('/arquivo', function(req, res){//rota post nao pode ser acessada pela URL
  conta.create({
      nome: req.body.nome,
      usuario: req.body.email,
      senha: req.body.senha
  })
})

//imprimir na pagina web do node é com o send
//app.post('/arquivo',function(req,res){
//  app.send("Nome: "+req.body.nome+"email: "+req.body.email+"senha: "req.body.senha);



app.listen(8080,()=>{console.log("aplicação rodando");});//porta da aplicação com a mensangem indicando que esta rodando
