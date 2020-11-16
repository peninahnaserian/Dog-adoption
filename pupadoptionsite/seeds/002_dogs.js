const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        /*{id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {
          "name": faker.name.firstName(),
          "kennel_id": faker.random.number({'min': 1, 'max': 3}) ,
          "bio": faker.lorem.paragraph(),
          "age": faker.random.number({'min': 1, 'max': 20}) ,
          "size": 'small',
          "male": faker.random.boolean() ,
          "price": faker.random.number({'min': 0, 'max': 200}),
          "img_url": faker.image.animals(), 
        },
        {
          "name": faker.name.firstName(),
          "kennel_id": faker.random.number({'min': 1, 'max': 3}) ,
          "bio": faker.lorem.paragraph(),
          "age": faker.random.number({'min': 1, 'max': 20}) ,
          "size": 'small',
          "male": faker.random.boolean() ,
          "price": faker.random.number({'min': 0, 'max': 200}),
          "img_url": faker.image.animals(), 
        },
        {
          "name": faker.name.firstName(),
          "kennel_id": faker.random.number({'min': 1, 'max': 3}) ,
          "bio": faker.lorem.paragraph(),
          "age": faker.random.number({'min': 1, 'max': 20}) ,
          "size": 'small',
          "male": faker.random.boolean() ,
          "price": faker.random.number({'min': 0, 'max': 200}),
          "img_url": faker.image.animals(), 
        }
      ]);
    });
};
