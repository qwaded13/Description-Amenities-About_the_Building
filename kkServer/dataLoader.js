//Modules
let testData = require('./testData.json');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model

testData.forEach(record => {
  DescriptionBox.findOneAndUpdate(
    {id: record.id},
    record,
    {upsert: true}
    ).exec()
});

console.log('Loaded all the data :)');