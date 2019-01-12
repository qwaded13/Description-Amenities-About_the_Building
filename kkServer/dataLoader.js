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

  
  let recordChunks = [];
  let chunk = 10000
  for (let i = 0; i < loadRecords.length; i += chunk) {
    recordChunks.push(loadRecords.slice(i, i + chunk));
  }

  console.log(recordChunks.length)

  let chunkIndex = 0;
  let batchInsert = () => {
    DescriptionBox.collection.insertMany(recordChunks[chunkIndex++], (err, docs) => {
      if (err) console.log(err);
      else if (recordChunks[chunkIndex] && recordChunks[chunkIndex].length) {
        console.log('loading chunk #' + chunkIndex);
        batchInsert();
      } else {
        console.timeEnd('loadTime')
      }
    })
  }

  batchInsert();
  
  // let loadingPromises = recordChunks.map((chunk, i) => {
  //   return DescriptionBox.insertMany(chunk, (err, docs) => {
  //     if (err) console.log(err);
  //     else console.log('logging chunk #' + i);
  //   });
  // })

  // Promise.all(loadingPromises)
  //   .then((result) => {
  //     console.timeEnd('loadTime')
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

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