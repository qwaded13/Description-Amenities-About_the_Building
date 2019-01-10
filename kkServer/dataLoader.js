//Dependencies
let Promise = require('bluebird');

//Other Modules
let testData = require('./testData.json');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model

console.time('load');

let loadData = () => {
  let loadRecords = testData.map((record) => {
    return new DescriptionBox(record);
  })
  // let recordChunks = [];
  // let chunk = 100000
  // for (let i = 0; i < loadRecords.length; i += chunk) {
  //   recordChunks.push(loadRecords.slice(i, i + chunk));
  // }

  DescriptionBox.insertMany(loadRecords, (err, docs) => {
    if (err) console.log(err);
    else console.timeEnd('load');
  })
}

loadData();