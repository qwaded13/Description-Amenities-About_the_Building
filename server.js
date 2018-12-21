let express = require('express');
let bodyParser = require('body-parser');
let {retriever} = require('./retrieverController.js')

let server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname + '/client/dist'));

server.get('/streetBreezy/api/:id', retriever);

let port = 3009
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})

module.exports.server = server;