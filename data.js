var dbComponents = require('./db.js')
var faker = require('faker');
let highlightAmenities = ['Cats and Dogs Allowed', 'Full-time Doorman', 'Washer/Dryer In-Unit', 'Elevator']
let buildingAmenities = ['Bike Room', 'Green Building', 'Package Room', 'Children\'s playroom', 'Concierge', 'Laundry in Building', 'Smoke-free', 'Storage Available', 'Live-in Super', 'Cold-Storage', 'Gym', 'Virtual Doorman', 'Concierge', 'Media Room', 'Community Recreation Facility', 'Swimming Pool', 'Parking Available']
let listingAmenities = ['Central Air-Conditioning', 'Dishwasher', 'Storage Available', 'Fireplace']
let outdoorAmenities = ['Terrace', 'Roof Deck', 'Garden']

let highlightsCreator = (divider, HLAArray) => {
    let length = parseInt((Math.random()*(HLAArray.length+1))/divider);
    let newHLArray = [];
    while(newHLArray.length < length){
        let amenity = HLAArray[parseInt(Math.random()*HLAArray.length)];
        if(!newHLArray.includes(amenity)){
            newHLArray.push(amenity);
        }
    }
    //console.log(newHLArray);
    return newHLArray
}

let buildingAmensCreator = (divider, BAArray) => {
    let length = parseInt((Math.random()*(BAArray.length+1))/divider);
    let newBArray = [];
    while(newBArray.length < length){
        let amenity = BAArray[parseInt(Math.random()*BAArray.length)];
        if(!newBArray.includes(amenity)){
            newBArray.push(amenity);
        }
    }
    //console.log(newBArray);
    return newBArray
};

let listingAmensCreator = (divider, LAArray) => {
    let length = parseInt((Math.random()*(LAArray.length+1))/divider);
    let newLArray = [];
    while(newLArray.length < length){
        let amenity = LAArray[parseInt(Math.random()*LAArray.length)];
        if(!newLArray.includes(amenity)){
            newLArray.push(amenity);
        }
    }
    //console.log(newLArray);
    return newLArray;
};

let outdoorAmensCreator = (divider, OAArray) => {
    let length = parseInt((Math.random()*(OAArray.length+1))/divider);
    let newOArray = [];
    while(newOArray.length < length){
        let amenity = OAArray[parseInt(Math.random()*OAArray.length)];
        if(!newOArray.includes(amenity)){
            newOArray.push(amenity);
        }
    }
    //console.log(newOArray);
    return newOArray
};

let generator = () => {
    return faker.lorem.words(num = 190);
}

dbComponents.saver(generator(), highlightsCreator, highlightAmenities, buildingAmensCreator, buildingAmenities, listingAmensCreator, listingAmenities, outdoorAmensCreator, outdoorAmenities);


//Got error "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"