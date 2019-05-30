// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('cohorts').insert([
    { name: 'pt4' },
    { name: 'pt5' },
    { name: 'pt6' },
  ]);
};