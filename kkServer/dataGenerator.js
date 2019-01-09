//Dependencies
let faker = require('faker');
let fs = require('fs');

//Other modules
let db = require('../db.js');

let records = [];

let generator = function(dataTotal) {
  for (let i = 0; i < dataTotal; i++) {
    records.push({
      id: i,
      description: 'test',
      highlightAmens: ['highlight'],
      buildingAmens: ['building'],
      listingAmens: ['listing'],
      outdoorAmens: ['outdoor']
    });
  }
};

generator(10000)

fs.writeFile('./testData.json', JSON.stringify(records), (err) => {
  if (err) console.log(err);
  else console.log('Data created - go wild');
});