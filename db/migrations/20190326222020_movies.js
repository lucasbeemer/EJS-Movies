
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamps(true, true);
  })
  .createTable('movies', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('genre');
    table.integer('votes').defaultsTo(0);
    table.timestamps(true, true);
    table.integer('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies').dropTable('users');
};
