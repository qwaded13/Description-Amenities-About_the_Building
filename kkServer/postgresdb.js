const { Pool } = require('pg')
const connectionString = 'postgresql://postgres:postgres@localhost:5432/postgres'

const pool = new Pool({
  connectionString: connectionString
})

pool.query(`
  CREATE TABLE IF NOT EXISTS descriptions.descriptions (
    id INTEGER NOT NULL PRIMARY KEY,
    description TEXT NOT NULL,
    highlightAmens TEXT [],
    buildingAmens TEXT [],
    listingAmens TEXT [],
    outdoorAmens TEXT []
  );
`)
.then((res) => {
  console.log('table created!');
  pool.query(`
    CREATE INDEX IF NOT EXISTS id ON descriptions.descriptions (id);
  `)
    .then((res) => {
      console.log('Index created on col id');
    })
    .catch((err) => {
      console.log(err);
    })
})
.catch((err) => {
  console.log(err);
});

module.exports = pool;