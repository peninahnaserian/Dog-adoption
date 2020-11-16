const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
        /*
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()}
      ]);
    });
};
