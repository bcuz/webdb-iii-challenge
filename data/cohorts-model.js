const db = require('./dbConfig');

module.exports = {
  get,
  getById,
  getCohortStudents,
  insert,
  // update,
  // remove,
};

function get() {
  return db('cohorts');
}

function insert(cohort) {
  return db('cohorts')
    .insert(cohort)
    .then(ids => {
      return ids[0]
      // return getById(ids[0]);
    });
}

function getById(id) {
  return db('cohorts')
    .where({ id })
    .first();
}

function getCohortStudents(cohortId) {
  return db('cohorts')
    .join('students', 'cohorts.id', 'students.cohort_id')
    .select('students.id', 'students.name')
    // .select('students.id', 'students.name', 'students.cohort_id')
    .where('students.cohort_id', cohortId);
}