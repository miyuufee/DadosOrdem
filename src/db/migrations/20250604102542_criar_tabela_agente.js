exports.up = function (knex) {
  return knex.schema.createTable('agentes', function (table) {
    table.increments('id').primary();
    table.string('nome', 120).notNullable();
    table.integer('idade').notNullable();
    table.string('classe', 20).notNullable();
    table.string('trilha', 50).notNullable();
    table.string('origem', 50).notNullable();
    table.string('estado', 20).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('agentes');
};