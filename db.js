var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

var db = mongoose.connect('mongodb://localhost:27017/streetBreezy', {
    useMongoClient: true
});

let DescriptionBoxSchema = mongoose.Schema({
    description: String,
    highlightAmens: Array,
    buildingAmens: Array,
    listingAmens: Array,
    outdoorAmens: Array
})

let DescriptionBox = mongoose.model('descriptionBox', DescriptionBoxSchema);

let saver = (description) => {
    DescriptionBox.findOne({description: description}).exec((err, exists) => {
        if(err){
            console.log(err);
        } else if (!exists){
            let newDescriptionBox = new DescriptionBox({
                description: description.description, 
                highlightAmens: description.highlightAmens, 
                buildingAmens: description.buildingAmens, 
                listingAmens: description.listingAmens || null, 
                outdoorAmens: description.outdoorAmens || null 
            }); 
            newDescriptionBox.save();
        }
    })
}

let retriever = (callback) => {
    let search = parseInt((Math.random() * 100))
    DescriptionBox.find({_id: search}).exect((err, data) => {
        if(err){
            callback(err);
        } else if(data){
            callback(null, data)
        }
    })
}

module.exports.db = db;
module.exports.saver = saver;
module.exports.retriever = retriever;
