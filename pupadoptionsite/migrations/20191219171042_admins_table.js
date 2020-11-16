
exports.up = function(knex) {
  return knex.schema.createTable('admins',function(tbl){
      tbl.increments('id').primary();
      tbl.integer('kennel_id').unsigned().notNullable().references('id').inTable('kennels');
      tbl.string('username',255).notNullable().unique();
      tbl.string('password',255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('admins');
};
