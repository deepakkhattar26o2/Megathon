const express = require('express')
const app = express();
const dbConnect = require('./db')
const bodyParser = require('body-parser')
const userRoute = require('./src/Routes/User')
const hackathonRouter = require('./src/Routes/Hackathon')
const blogRouter = require('./src/Routes/Blog')
dbConnect();
app.use(bodyParser.json())

app.use('/user', userRoute)

app.use('/hackathon', hackathonRouter)

app.use('/blog', blogRouter)

module.exports = app;
