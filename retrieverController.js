var dbComponents = require('./db.js');

exports.retriever = (req,res) => {
    let {id} = req.params;
    dbComponents.DescriptionBox.findOne({id: id}).exec((err, data) => {
        if(err){
            res.send(err);
        } else if(data){
            res.send(data);
        }
    })
}

