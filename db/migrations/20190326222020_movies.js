
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
      table.increments();
      table.string('title');
      table.text('description');
      table.string('genre');
      table.integer('votes').defaultsTo(0);
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
