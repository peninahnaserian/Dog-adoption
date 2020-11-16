const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notifications').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        /*{id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {
          "admin_id": 1,
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()  
        },
        {
          "admin_id": 2,
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()  
        },
        {
          "admin_id": 3,
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()  
        },
        {
          "admin_id": 4,
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()  
        }
      ]);
    });
};
