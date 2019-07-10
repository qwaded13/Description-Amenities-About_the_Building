var db = require('./db.js');

module.exports.retriever = (req, res) => {
  const { id } = req.params;
  db.DescriptionBox.findOne({ id: id }, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else if (data) {
      console.log('data from the DB', data);
      res.send(data);
    }
  });
};

// module.exports.alt = (req, res) => {
//     console.log(`ALT RETRIEVER CALLED AT CONTOLLER FOR ID ${id}`);
//     res.send(404);
// }
