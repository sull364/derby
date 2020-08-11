const { Pool } = require('pg');

const PG_URI = 'postgres://qexdsric:EvPJuZIreQePGyOInWpsk18BE2MrH7nE@ruby.db.elephantsql.com:5432/qexdsric';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
