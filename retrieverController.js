var dbComponents = require('./db.js');

module.exports.retriever = (req,res) => {
    console.log('this is req param at the controller:', req.params);
    const {id} = req.params;
    dbComponents.DescriptionBox.findOne({id: id}).exec((err, data) => {
        if(err){
            console.log(`ERROR AT SERVER FOR ID ${id}`);
            res.sendStatus(status);
        } else if(data){
            console.log('this is the data from the db: ', data)
            res.send(data);
        }
    })
}

// module.exports.alt = (req, res) => {  
//     console.log(`ALT RETRIEVER CALLED AT CONTOLLER FOR ID ${id}`);
//     res.send(404);
// }

