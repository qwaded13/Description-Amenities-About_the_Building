//Dependencies
let faker = require('faker');
let fs = require('fs');

//Other modules
let db = require('../db.js');


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
console.time('MOAR DATA');
generator(250000);


fs.writeFile('./testData.json', JSON.stringify(records), (err) => {
  if (err) console.log(err);
  else {
    console.log('Data created - go wild');
    console.timeEnd('MOAR DATA');
  }
});