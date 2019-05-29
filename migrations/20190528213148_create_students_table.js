exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(tbl) {
    // primary key
    tbl.increments(); 
    tbl
      .integer('cohort_id')
      .notNullable()
      .references('id')
      .inTable('cohorts');
    tbl.text('name').notNullable();
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};