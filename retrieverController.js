var dbComponents = require('./db.js');

module.exports.retriever = (req,res) => {
    const {id} = req.params;
    dbComponents.DescriptionBox.findOne({id: id}).exec((err, data) => {
        if(err){
            res.sendStatus(500);
        } else if(data){
            res.send(data);
        }
    })
}

// module.exports.alt = (req, res) => {  
//     console.log(`ALT RETRIEVER CALLED AT CONTOLLER FOR ID ${id}`);
//     res.send(404);
// }

