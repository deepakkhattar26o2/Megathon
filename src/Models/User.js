const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    emailId : {type: String, require: true, matches: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/},
    userName: {type: String, require: true, unique: true},
    password: {type: String, require: true, min: 6}    
})

module.exports = mongoose.model("User", userSchema);