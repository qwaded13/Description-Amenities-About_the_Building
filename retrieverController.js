var dbComponents = require('./db.js');

exports.retriever = (req,res) => {
    let {id} = req.query;
    dbComponents.DescriptionBox.find({id: id}).exec((err, data) => {
        if(err){
            res.send(err);
        } else if(data){
            res.send(data);
        }
    })
})

