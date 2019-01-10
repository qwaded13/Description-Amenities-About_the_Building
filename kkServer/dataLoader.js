//Dependencies
let Promise = require('bluebird');

//Other Modules
let testData = require('./testData.json');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model

console.time('loadTime');

let loadData = () => {
  let loadRecords = testData.map((record) => {
    return new DescriptionBox(record);
  })

  DescriptionBox.collection.insertMany(loadRecords, (err, docs) => {
    if (err) console.log(err);
    else console.timeEnd('loadTime')
  })

  // let recordChunks = [];
  // let chunk = 100000
  // for (let i = 0; i < loadRecords.length; i += chunk) {
  //   recordChunks.push(loadRecords.slice(i, i + chunk));
  // }

  // recordChunks.forEach((chunk, i) => {
  //   DescriptionBox.insertMany(chunk, (err, docs) => {
  //     if (err) console.log(err);
  //     else {
  //       if (i === recordChunks.length - 1) {
  //         console.timeEnd('loadTime');
  //       }
  //       else console.timeLog('loadTime')
  //     }
  //   })
  // })

}

loadData();