const { Pool } = require('pg')
const connectionString = 'postgresql://postgres:postgres@localhost:5432/postgres'

const pool = new Pool({
  connectionString: connectionString
})

pool.query('SELECT version()', (err, res) => {
  if (err) console.log(err);
  else {
    console.log('Query result: ', res)
    pool.end()
  }
});