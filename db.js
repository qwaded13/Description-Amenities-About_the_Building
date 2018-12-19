var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/streetBreezy';

var db = mongoose.connect('mongodb://localhost:27017/streetBreezy');

let DescriptionBoxSchema = mongoose.Schema({
    id: Number,
    description: String,
    highlightAmens: Array,
    buildingAmens: Array,
    listingAmens: Array,
    outdoorAmens: Array
})

let DescriptionBox = mongoose.model('descriptionBox', DescriptionBoxSchema);

let saver = (counter, description, highlightAmensArray, buildingAmensArray, listingAmensArray, outdoorAmensArray) => {
    while(counter < 100){
        DescriptionBox.findOne({id: counter}).exec((err, exists) => {
            if(err){
                console.log(err);
            } else if (!exists){
                let newDescriptionBox = new DescriptionBox({
                    id: counter,
                    description: description, 
                    highlightAmens: highlightAmensArray || null, 
                    buildingAmens: buildingAmensArray || null, 
                    listingAmens:listingAmensArray || null, 
                    outdoorAmens:outdoorAmensArray || null 
                }); 
                newDescriptionBox.save();
            }
            counter++;
        })
    }
}

let retriever = () => {
    let search = parseInt((Math.random() * 100))
    DescriptionBox.find({_id: search}).exect((err, data) => {
        if(err){
            callback(err);
        } else if(data){
            callback(data)
        }
    })
}

module.exports.db = db;
module.exports.saver = saver;
module.exports.retriever = retriever;
