const db = require('./dbConfig');

module.exports = {
  get,
  insert,
  // getById,
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