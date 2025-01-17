const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const Contact = mongoose.model('Contact',ContactSchema)
module.exports = Contact;