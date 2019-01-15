//Dependencies
let faker = require('faker');
let fs = require('fs');

//Other modules
let db = require('../db.js');


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
// console.time('MOAR DATA');
// generator(250000);


// fs.writeFile('./testData.json', JSON.stringify(records), (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Data created - go wild');
//     console.timeEnd('MOAR DATA');
//   }
// });

module.exports.generator = generator;