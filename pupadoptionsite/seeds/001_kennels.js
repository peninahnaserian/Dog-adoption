
const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kennels').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('kennels').insert([
       /* {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}*/
        {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        },
        {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        },
        {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        }
      ]);
    });
};
