'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { //quando executarmos o migrations esse up será o responsavel para subir os dados para base de dados
    return queryInterface.createTable('salarios', { //cria a tabela na base de dados
      id: { //campos e valores do ids
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      salario: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      valor_extra:{
          type: Sequelize.DECIMAL,
          allowNull: false,
          unique: true, 
      },
      usuario: { 
        type:Sequelize.INTEGER,
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
    return queryInterface.dropTable('salarios');
     
  }
};
