//Dependencies
let Promise = require('bluebird');

//Other Modules
let testData = require('./testData.json');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model

console.time('load');

let loadData = () => {
  let loadPromises = testData.map((record) => {
    return DescriptionBox.findOneAndUpdate(
      {id: record.id},
      record,
      {upsert: true}
    ).exec()
  })

  Promise.all(loadPromises)
    .then(() => {
      console.timeEnd('load')
    })
    .catch((err) => {
      console.log(err);
    })
}

// testData.forEach(record => {
//   DescriptionBox.findOneAndUpdate(
//     {id: record.id},
//     record,
//     {upsert: true}
//     ).exec()
//     if (record.id === 9999) console.timeEnd('load');
// });

loadData();