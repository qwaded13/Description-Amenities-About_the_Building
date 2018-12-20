let express = require('express');
let bodyParser = require('body-parser');
let mongoCompos = require('./db.js');
let retriever = require('./retrieverController.js')

let server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname, './client.html'));

app.get('/streetBreezy', retriever);

let port = 2500
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})