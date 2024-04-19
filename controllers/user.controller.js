let model = require('../models/user.model');

exports.list =   (req, res)=>{
    let list = model.list();
    console.log('list', list);
    res.json({
        'list': list
    })
}