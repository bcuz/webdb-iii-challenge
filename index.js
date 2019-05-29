const express = require('express');

const Cohorts = require('./data/cohorts-model');

const server = express();

server.use(express.json());

server.get('/api/cohorts', async (req, res) => {
  try {
    const cohorts = await Cohorts.get();
    res.status(200).json(cohorts);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the cohorts',
    });
  }
});

server.post('/api/cohorts', async (req, res) => {
  try {
    const cohort = await Cohorts.insert(req.body);
    res.status(201).json(cohort);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the cohort',
    });
  }
});

const port = 5001;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});