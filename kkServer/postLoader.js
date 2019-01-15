let pool = require('./postgresdb.js')
let { generator } = require('./dataGenerator')
let createCsvWriter = require('csv-writer').createObjectCsvWriter;


// let converter = require('json-2-csv');


// use the data generation script to create one batch of data
// maybe I could create 10M records at once?
// write each batch to a csv and load it into postgres
// on each successful query, run the loading func again

let csvWriter = createCsvWriter({
    header: [
      {id: 'id', title: 'id'},
      {id: 'description', title: 'description'},
      {id: 'highlightAmens', title: 'highlightAmens'},
      {id: 'buildingAmens', title: 'buildingAmens'},
      {id: 'listingAmens', title: 'listingAmens'},
      {id: 'outdoorAmens', title: 'outdoorAmens'},
    ],
    path: './batch.csv'
});


let currentTotal = 0;
let dataTotal = 100000;
let batchNumber = 0;

let postLoader = () => {
  let data = generator(100000, currentTotal)
  csvWriter.writeRecords(data)
    .then(() => {
      console.log('created a CSV!');
    })
    .catch((err) => {
      console.log(err);
    })

  // DescriptionBox.collection.insertMany(data, (err, doc) => {
  //   if (err) console.log(err);
  //   else if (currentTotal < dataTotal) {
  //     if (!(currentTotal % 1000000)){
  //       batchNumber++;
  //       console.log(`Loading batch #${batchNumber}/10`);
  //     } 
  //     currentTotal += 100000
  //     loader();
  //   } else {
  //     if (currentTotal >= dataTotal) console.timeEnd('loadTime')
  //   }
  // })
}

postLoader();