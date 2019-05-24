'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users',
      {
        where: {
          name: 'testuser'
        }
      },
      ['id']
    )

    if (userId) {
      return queryInterface.bulkInsert(
        'Records',
        [
          {
            name: '午餐',
            category: 'utensils',
            date: '2019-04-01',
            amount: 100,
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: '晚餐',
            category: 'utensils',
            date: '2019-04-15',
            amount: 150,
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: '捷運',
            category: 'shuttle-van',
            date: '2019-05-01',
            amount: 50,
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: '電影',
            category: 'grin-beam',
            date: '2019-05-15',
            amount: 200,
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: '租金',
            category: 'home',
            date: '2019-05-30',
            amount: 10000,
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
    }
  },

  async down(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users',
      {
        where: {
          name: 'testuser'
        }
      },
      ['id']
    )

    if (userId) {
      return queryInterface.bulkDelete(
        'Records',
        [
          {
            userId: userId
          }
        ],
        {}
      )
    }
  }
}