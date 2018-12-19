let express = require('express');
let bodyParser = require('body-parser');

let server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname, './client.html'));

app.get('/')



let port = 2500
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})