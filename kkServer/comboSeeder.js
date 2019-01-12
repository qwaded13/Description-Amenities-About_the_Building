// Other Modules
let db = require('../db.js');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model


//Dependencies
let faker = require('faker');
let fs = require('fs');

// console.time('generation time: ')
let generator = function(batchSize, startID) {
  let records = [];
  for (let i = startID; i < startID + batchSize; i++) {
    records.push({
      id: i,
      description: 'test',
      highlightAmens: ['highlight'],
      buildingAmens: ['building'],
      listingAmens: ['listing'],
      outdoorAmens: ['outdoor']
    });
  }
  return records;
}

let currentTotal = 0;
let dataTotal = 10000000;
let batchNumber = 0;

console.time('loadTime');
let loader = () => {
  DescriptionBox.collection.insertMany(generator(100000, currentTotal), (err, doc) => {
    if (err) console.log(err);
    else if (currentTotal < dataTotal) {
      if (!(currentTotal % 1000000)){
        batchNumber++;
        console.log(`Loading batch #${batchNumber}/10`);
      } 
      currentTotal += 100000
      loader();
    } else {
      if (currentTotal >= dataTotal) console.timeEnd('loadTime')
    }
  })
}
loader();