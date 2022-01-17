require('dotenv').config()
const uri = process.env.mongoUri
const mongoose = require('mongoose')
const connect = async () =>{
    try{
        await mongoose.connect(uri)
        console.log('DB Connected!!')
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}
module.exports = connect