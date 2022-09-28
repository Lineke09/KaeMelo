const Sequelize = require('sequelize');
const sequilize = new Sequelize("KAE", "root", "54321", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Database connection seccessful!");
}).catch(function(){
    console.log("[Erro]: Database connection nor performed!");
});

module.exports = sequelize;