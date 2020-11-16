
exports.up = function(knex) {
  return knex.schema.createTable('dog_breeds',function(tbl){
      tbl.increments('id').primary();
      tbl.integer('dog_id').unsigned().notNullable().references('id').inTable('dogs');
      tbl.integer('breed_id').unsigned().notNullable().references('id').inTable('breeds');

      

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dog_breeds');
};
