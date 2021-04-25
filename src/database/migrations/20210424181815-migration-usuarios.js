'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { //quando executarmos o migrations esse up será o responsavel para subir os dados para base de dados
    return queryInterface.createTable('usuarios', { //cria a tabela na base de dados
      id: { //campos e valores do ids
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true, //email tem que ser unico, não pode haver um duplicado
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      provider: { //para diferenciar quem estará logando no sistema
        type:Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down: (queryInterface, Sequelize) => { //reverte a migrations que subi
    return queryInterface.dropTable('usuarios');
     
  }
};
