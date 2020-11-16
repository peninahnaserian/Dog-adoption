const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admins').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        /*{id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {
          "kennel_id": 1,
          "username": faker.internet.userName(),
          "password": faker.internet.password(),
          },
          {
            "kennel_id": 2,
            "username": faker.internet.userName(),
            "password": faker.internet.password(),
            },
            {
              "kennel_id": 3,
              "username": faker.internet.userName(),
              "password": faker.internet.password(),
              },
              {
                "kennel_id": 4,
                "username": faker.internet.userName(),
                "password": faker.internet.password(),
                },      
              ]);
    });
};
