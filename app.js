const express = require('express')
const app = express();
const dbConnect = require('./db')
const bodyParser = require('body-parser')
const userRoute = require('./src/Routes/User')
dbConnect();
app.use(bodyParser.json())
app.get('/', (req, res, next)=>{
    res.status(200).json({
        Message: 'Nothing To See Here Buoy!'
    })
})
app.use('/user', userRoute)

module.exports = app;