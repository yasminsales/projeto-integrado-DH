'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable ('despesavariavel', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      investimentos: { 
        type: Sequelize.DECIMAL, 
        allowNull: true,
      }, 
      lazer: { 
        type: Sequelize.DECIMAL, 
        allowNull: true,
      },      
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('despesavariavel');
  
  }
};