const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const PartySchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Title of party needed"],
        minlength: [10, "The title needs to be 10 or longer characters"], 
        unique: [true, "Party title is already in use!"]
    },
    host : {
        type: String,
        required: [true, "The party needs a host"]
    },
    theme : {
        type: String,
        required: [true, "The party needs a theme"]
    },
    when : {
        type: Date,
        required: [true, "You need to let folks know when the party is going down"]
    },
    where : {
        type: String,
        required: [true, "You need to let folks know where the party is going down"]
    },
    participants: []
}, {timestamps: true}).plugin(uniqueValidator);

mongoose.model("Party", PartySchema);