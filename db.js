var mongoose = require('mongoose');

// let hostedURL = 'mongodb://ajoo97:abc123@ds131814.mlab.com:31814/fsgitrepopuller';

var db = mongoose.connect('mongodb://localhost:27017/streetBreezy');
mongoose.set('debug', true);

let DescriptionBoxSchema = mongoose.Schema({
    id: Number,
    description: String,
    highlightAmens: Array,
    buildingAmens: Array,
    listingAmens: Array,
    outdoorAmens: Array
})

let DescriptionBox = mongoose.model('descriptionBox', DescriptionBoxSchema);

let saver = (description, highlightAmenitiesCreator, highlightAmenitiesArray, buildingAmenitiesCreator, buildingAmenitiesArray, listingAmenitiesCreator, listingAmenitiesArray, outdoorAmenitiesCreator, outdoorAmenitiesArray) => {
    console.log('SAVER CALLED');
    let divider = 1;
    for(let i = 0; i < 100; i++){
        if(i >= 0 && i < 25){
            divider = 4;
        } else if(i >= 25 && i < 50){
            divider = 3;
        } else if(i >= 50 && i < 75){
            divider = 2;
        } else if(i >= 75 && i < 100){
            divider = 1;
        }
        let input1 = highlightAmenitiesCreator(divider, highlightAmenitiesArray);
        //console.log('INPUT1: ', input1)
        let input2 = buildingAmenitiesCreator(divider, buildingAmenitiesArray);
        //console.log('INPUT2: ', input2)
        let input3 = listingAmenitiesCreator(divider, listingAmenitiesArray);
        //console.log('INPUT3: ', input3)
        let input4 = outdoorAmenitiesCreator(divider, outdoorAmenitiesArray);
        //console.log('INPUT4: ', input4)
        DescriptionBox.findOne({id: i}, (err, exists) => {
            if(err){
                console.log('THERE IS AN ERROR!!!' , err);
            } else if (!exists){
                let newDescriptionBox = new DescriptionBox({
                    id: i,
                    description: description, 
                    highlightAmens: input1 || null, 
                    buildingAmens: input2 || null,
                    listingAmens: input3 || null, 
                    outdoorAmens: input4 || null 
                }); 
                newDescriptionBox.save();
            }
        })
    }
}

module.exports.db = db;
module.exports.saver = saver;
module.exports.DescriptionBox = DescriptionBox;
