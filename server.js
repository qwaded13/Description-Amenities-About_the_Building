let express = require('express');
let bodyParser = require('body-parser');
let retrieveFunctions = require('./retrieverController.js')
let path = require('path');
let cors = require('cors');

let server = express();
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '/client/dist')));
server.use(cors());

server.get('/streetBreezy/api/:id', retrieveFunctions.retriever);
// server.get('/*', retrieveFunctions.alt);

let port = 3009
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})

module.exports.server = server;