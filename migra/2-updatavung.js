'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.addConstraint('Chinhanhs', { 
        fields: ['vungId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_name',
        references:{
          table:'Vungs',
          field: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      
        
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.removeConstraint('Chinhanhs', 'vungId');
    
  }
};
