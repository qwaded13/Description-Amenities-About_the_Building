require('newrelic');
let express = require('express');
let bodyParser = require('body-parser');
let retrieveFunctions = require('./retrieverController.js')
let path = require('path');
let cors = require('cors');
let compression = require('compression');
let morgan = require('morgan');

let server = express();
server.use(compression());
server.use(bodyParser.json());
server.use('/:id(\\d+)', express.static(path.join(__dirname, '/client/dist')));
server.use(cors());
server.use(morgan('dev'));

server.get('/api/description/:id', retrieveFunctions.retriever);
server.get('/loaderio-c69f5a82221cf52e67424e0996100853', (req, res) => {
    res.send('loaderio-c69f5a82221cf52e67424e0996100853');
})

let port = 3009
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports.server = server;