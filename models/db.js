//arquivo de conexão com o banco de dados
const Sequelize = require("sequelize");

const sequelize = new Sequelize('Gerenciador Despesas','','123456',{//as chaves são sempre para criar objetos
    host: 'localhost', 
    dialect: 'postgres',

});

module.exports={
    Sequelize: Sequelize,//para indicar os tipos de dados das colunas
    sequelize: sequelize//para indicar a tabela
}


