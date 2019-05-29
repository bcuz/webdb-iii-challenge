const db = require('./dbConfig');

module.exports = {
  get,
  // insert,
  // getById,
  // update,
  // remove,
};

function get() {
  return db('cohorts');
}