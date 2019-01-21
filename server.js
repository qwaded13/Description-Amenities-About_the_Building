require('newrelic');
let express = require('express');
let bodyParser = require('body-parser');
let retrieveFunctions = require('./retrieverController.js')
let path = require('path');
let cors = require('cors');
let compression = require('compression');

let server = express();
server.use(compression());
server.use(bodyParser.json());
server.use('/:id', express.static(path.join(__dirname, '/client/dist')));
server.use(cors());

server.get('/api/description/:id', retrieveFunctions.retriever);
// server.get('/*', retrieveFunctions.alt);
server.get('/loaderio-37c8cab985f08f88038ba3ac0f33b76c', (req, res) => {
    res.send('loaderio-37c8cab985f08f88038ba3ac0f33b76c')
})

let port = 3009
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports.server = server;