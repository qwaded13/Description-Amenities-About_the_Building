// Other Modules
let db = require('../db.js');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model
let { generator } = require('./dataGenerator.js')

let currentTotal = 0;
let dataTotal = 10000000;
let batchNumber = 0;

console.time('loadTime');

let loader = () => {
  let data = generator(100000, currentTotal)
  DescriptionBox.collection.insertMany(data, (err, doc) => {
    currentTotal += 100000;
    if (err) console.log(err);
    else if (currentTotal < dataTotal) {
      if (!(currentTotal % 1000000)){
        batchNumber++;
        console.log(`Loading batch #${batchNumber}/10`);
      } 
      loader();
    } else {
      if (currentTotal >= dataTotal) console.timeEnd('loadTime')
    }
  })
}

loader();