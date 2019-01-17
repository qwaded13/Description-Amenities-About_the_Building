let pool = require('./postgresdb.js')
let { generator } = require('./dataGenerator')
let createCsvWriter = require('csv-writer').createObjectCsvWriter;


// let currentTotal = 0;
let dataTotal = 10000000;
let batchNumber = 0;

/* !!! make the data types for the arrays JSONB data types instead of postgres arrays */
console.time('PG Load Time:')
let postLoader = (currentTotal) => {
  let data = generator(500000, currentTotal, true)
  
  let csvWriter = createCsvWriter({
      header: ['id', 'description', 'highlightAmens', 'buildingAmens', 'listingAmens', 'outdoorAmens'],
      path: `./batch${batchNumber}.csv`
  });

  csvWriter.writeRecords(data)
    .then((data) => {
      console.log('created a CSV!');
      pool.query(`COPY descriptions.descriptions FROM '${__dirname}\\batch${batchNumber}.csv' DELIMITER ',' CSV HEADER`)
        .then(() => {
          if (currentTotal < dataTotal) {
            batchNumber++;
            console.log(`Loading batch #${batchNumber}/20`);
            postLoader(currentTotal + 500000);
          } else {
            if (currentTotal >= dataTotal) console.timeEnd('PG Load Time:')
          }
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}

postLoader(0);