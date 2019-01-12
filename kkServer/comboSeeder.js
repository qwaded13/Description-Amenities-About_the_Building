// Other Modules
let db = require('../db.js');
let DescriptionBox = require('../db.js').DescriptionBox; //DB Model
let { generator } = require('./dataGenerator.js')

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