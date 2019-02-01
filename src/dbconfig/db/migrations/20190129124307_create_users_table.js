
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles',(table)=> {
    table.increments();
    table.string('role').notNullable();
  }).createTable('users',(table)=> {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.integer('role_id').references('id').inTable('roles');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('roles').dropTable('users');
};
