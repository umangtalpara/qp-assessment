'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Groceries', [
      {
        name: 'product-1',
        price: 120,
        stock: 100,
        sku: 'SKU-001',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'product-2',
        price: 50,
        stock: 150,
        sku: 'SKU-002',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'product-3',
        price: 80,
        stock: 200,
        sku: 'SKU-003',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'product-4',
        price: 150,
        stock: 120,
        sku: 'SKU-004',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'product-5',
        price: 200,
        stock: 80,
        sku: 'SKU-005',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groceries', null, {});
  },
};
