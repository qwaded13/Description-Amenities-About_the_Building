var dbComponents = require('./db.js')
var faker = require('faker');
let highlightAmenities = ['Cats and Dogs Allowed', 'Full-time Doorman', 'Washer/Dryer In-Unit', 'Elevator']
let buildingAmenities = ['Bike Room', 'Green Building', 'Package Room', 'Children\'s playroom', 'Concierge', 'Laundry in Building', 'Smoke-free', 'Storage Available', 'Live-in Super', 'Cold-Storage', 'Gym', 'Virtual Doorman', 'Concierge', 'Media Room', 'Community Recreation Facility', 'Swimming Pool', 'Parking Available']
let listingAmenities = ['Central Air-Conditioning', 'Dishwasher', 'Storage Available', 'Fireplace']
let outdoorAmenities = ['Terrace', 'Roof Deck', 'Garden']
let counter = 0;

let highlightsCreator = (HLAArray) => {
    let length = parseInt(Math.random()*(HLAArray.length+1));
    let newHLArray = [];
    console.log(length)
    while(newHLArray.length < length){
        let amenity = HLAArray[parseInt(Math.random()*HLAArray.length)];
        if(!newHLArray.includes(amenity)){
            newHLArray.push(amenity);
        }
    }
    return newHLArray
}

let buildingAmensCreator = (BAArray) => {
    let length = parseInt(Math.random()*(BAArray.length+1));
    let newBArray = [];
    console.log(length)
    while(newBArray.length < length){
        let amenity = BAArray[parseInt(Math.random()*BAArray.length)];
        if(!newBArray.includes(amenity)){
            newBArray.push(amenity);
        }
    }
    return newBArray
};

let listingAmensCreator = (LAArray) => {
    let length = parseInt(Math.random()*(LAArray.length+1));
    let newLArray = [];
    console.log(length)
    while(newLArray.length < length){
        let amenity = LAArray[parseInt(Math.random()*LAArray.length)];
        if(!newLArray.includes(amenity)){
            newLArray.push(amenity);
        }
    }
    return newLArray;
};

let outdoorAmensCreator = (OAArray) => {
    let length = parseInt(Math.random()*(OAArray.length+1));
    let newOArray = [];
    console.log(length)
    while(newOArray.length < length){
        let amenity = OAArray[parseInt(Math.random()*OAArray.length)];
        if(!newOArray.includes(amenity)){
            newOArray.push(amenity);
        }
    }
    return newOArray
};

dbComponents.saver(counter, faker.lorem.words(num = 190), highlightAmenities, buildingAmenities,listingAmenities,outdoorAmenities);

//Got error "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"