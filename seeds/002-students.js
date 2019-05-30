// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('students').insert([
    { cohort_id: 1, name: 'adam' },
    { cohort_id: 2, name: 'edgar' },
    { cohort_id: 1, name: 'tevin' },
  ]);
};