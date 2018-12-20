let express = require('express');
let bodyParser = require('body-parser');
let mongoCompos = require('./db.js');
let dbComponents = require('./db.js')

let server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname, './client.html'));

app.get('/streetBreezy', (req,res) => {
    let {id} = req.query;
    DescriptionBox.find({id: id}).exec((err, data) => {
        if(err){
            res.send(err);
        } else if(data){
            res.send(data);
        }
    })
})

let port = 2500
server.listen(port, () => {
    console.log(`listning on port ${port}`)
})