const faker = require ('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dog_breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dog_breeds').insert([
       /* {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {
          "breed_id": faker.random.number({'min': 1, 'max': 5}),
          "dog_id": 1,
         },
         {
          "breed_id": faker.random.number({'min': 1, 'max': 5}),
          "dog_id": 2,
         },
         {
          "breed_id": faker.random.number({'min': 1, 'max': 5}),
          "dog_id": 3,
         },
         {
          "breed_id": faker.random.number({'min': 1, 'max': 5}),
          "dog_id": 4,
         },
      ]);
    });
};
