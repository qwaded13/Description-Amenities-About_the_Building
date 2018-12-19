let express = require('express');
let bodyParser = require('body-parser');
let mongoCompos = require('./db.js');

let server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname, './client.html'));

app.get('/streetBreezy', (req,res) => {
    mongoCompos.retriever(res.send)
})

app.post('/streetBreezy', (req,res) => {
    let {description} = req.body;
    mongoCompos.saver(description);
})

let port = 2500
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})