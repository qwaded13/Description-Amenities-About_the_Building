var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

var db = mongoose.connect('mongodb://localhost:27017/streetBreezy', {
    useMongoClient: true
});

let DescriptionBoxSchema = mongoose.Schema({
    id: Number,
    description: String,
    highlightAmens: Array,
    buildingAmens: Array,
    listingAmens: Array,
    outdoorAmens: Array
})

let DescriptionBox = mongoose.model('descriptionBox', DescriptionBoxSchema);

let saver = (counter, highlightAmensArray, buildingAmensArray, listingAmensArray, outdoorAmensArray) => {
    while(counter < 100){
        DescriptionBox.findOne({id: counter}).exec((err, exists) => {
            if(err){
                console.log(err);
            } else if (!exists){
                let newDescriptionBox = new DescriptionBox({
                    id: counter,
                    description: description.description, 
                    highlightAmens: new Array(randomIndex(highlightAmensArray)), 
                    buildingAmens: new Array(randomIndex(buildingAmensArray)), 
                    listingAmens: new Array(randomIndex(listingAmensArray)) || null, 
                    outdoorAmens:new Array(randomIndex(outdoorAmensArray)) || null 
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
