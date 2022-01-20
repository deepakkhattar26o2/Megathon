const mongoose = require('mongoose')
const hackathonSchema = mongoose.Schema({
    name: {type: String, require: true, unique: true}, 
    organizer: {type: String, require: true},
    duration: {type: Number, require: true, default: 1}, 
    link: {type: String, require: true},
    date: {type: Date, require: true}
})

module.exports = mongoose.model('Hackathons', hackathonSchema)