'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable ('despesafixa', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      educacao: { 
        type: Sequelize.DECIMAL, 
        allowNull: true,
      }, 
      gastos_fixos: { 
        type: Sequelize.DECIMAL, 
        allowNull: true,
      }, 
      created_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
    }) 
  },

  down: async (queryInterface, Sequelize) => { 

    await queryInterface.dropTable('despesafixa');
  }}