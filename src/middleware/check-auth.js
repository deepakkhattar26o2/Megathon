const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization
        console.log(token.email)
        const decoded = jwt.verify(token, process.env.myKey)
        req.userData = decoded
        next();
    }
    catch(err){
        return res.status(409).json({Message: 'Auth Failed!'})
    }
}
