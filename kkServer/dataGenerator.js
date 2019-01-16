//Dependencies
let faker = require('faker');
let fs = require('fs');

//Other modules
// let db = require('../db.js');

let highlightAmenities = ['Cats and Dogs Allowed', 'Full-time Doorman', 'Washer/Dryer In-Unit', 'Elevator']
let buildingAmenities = ['Bike Room', 'Green Building', 'Package Room', 'Children\'s playroom', 'Concierge', 'Laundry in Building', 'Smoke-free', 'Storage Available', 'Live-in Super', 'Cold-Storage', 'Gym', 'Virtual Doorman', 'Concierge', 'Media Room', 'Community Recreation Facility', 'Swimming Pool', 'Parking Available']
let listingAmenities = ['Central Air-Conditioning', 'Dishwasher', 'Storage Available', 'Fireplace']
let outdoorAmenities = ['Terrace', 'Roof Deck', 'Garden']
let description = faker.lorem.words(num = 500);

let generator = function(batchSize, startID, csvFormat) {
  let records = [];
  for (let i = startID; i < startID + batchSize; i++) {
    let descriptionStart = Math.floor((Math.random() * 300));
    let highlightStart = Math.floor((Math.random() * highlightAmenities.length));
    let buildingStart = Math.floor((Math.random() * buildingAmenities.length));
    let listingStart = Math.floor((Math.random() * listingAmenities.length));
    let outdoorStart = Math.floor((Math.random() * outdoorAmenities.length));

    if (csvFormat) {
      let regex1 = new RegExp('\\[');
      let regex2 = new RegExp('\\]');
      records.push({
        id: i,
        description: description.slice(descriptionStart, descriptionStart + 190),
        highlightAmens: JSON.stringify(highlightAmenities.slice(highlightStart, highlightStart + Math.floor(Math.random() * 4))).replace(regex1, '{').replace(regex2, '}'),
        buildingAmens: JSON.stringify(buildingAmenities.slice(buildingStart, buildingStart + Math.floor(Math.random() * 4))).replace(regex1, '{').replace(regex2, '}'),
        listingAmens: JSON.stringify(listingAmenities.slice(listingStart, listingStart + Math.floor(Math.random() * 4))).replace(regex1, '{').replace(regex2, '}'),
        outdoorAmens: JSON.stringify(outdoorAmenities.slice(outdoorStart, outdoorStart + Math.floor(Math.random() * 4))).replace(regex1, '{').replace(regex2, '}')
      });
    } else {
      records.push({
        id: i,
        description: description.slice(descriptionStart, descriptionStart + 190),
        highlightAmens: highlightAmenities.slice(highlightStart, highlightStart + Math.floor(Math.random() * 4)),
        buildingAmens: buildingAmenities.slice(buildingStart, buildingStart + Math.floor(Math.random() * 4)),
        listingAmens: listingAmenities.slice(listingStart, listingStart + Math.floor(Math.random() * 4)),
        outdoorAmens: outdoorAmenities.slice(outdoorStart, outdoorStart + Math.floor(Math.random() * 4))
      });
    }

  }
  return records;
}

module.exports.generator = generator;