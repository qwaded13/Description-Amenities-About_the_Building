var mongoose = require('mongoose');

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

let saver = (description, highlightAmenitiesArray, buildingAmenitiesArray, listingAmenitiesArray, outdoorAmenitiesArray) => {
    console.log('SAVER CALLED')
    for(let i = 0; i < 100; i++){
        DescriptionBox.findOne({id: i}, (err, exists) => {
            if(err){
                console.log('THERE IS AN ERROR!!!' , err);
            } else if (!exists){
                let newDescriptionBox = new DescriptionBox({
                    id: i,
                    description: description, 
                    highlightAmens: highlightAmenitiesArray || null, 
                    buildingAmens: buildingAmenitiesArray || null,
                    listingAmens: listingAmenitiesArray || null, 
                    outdoorAmens: outdoorAmenitiesArray || null 
                }); 
                newDescriptionBox.save();
            }
        })
    }
}

module.exports.db = db;
module.exports.saver = saver;
module.exports.DescriptionBox = DescriptionBox;
