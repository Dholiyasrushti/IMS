var mongoose = require('mongoose');

var branchschema = new mongoose.Schema({
    name:{
        type : String
    }
})

module.exports = mongoose.model('branch',branchschema);