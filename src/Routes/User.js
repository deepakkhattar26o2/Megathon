const Express = require('express')
const router = Express.Router();
const userController = require('../Controllers/User')
const User = require('../Models/User')
const bcr = require('bcrypt')
const jwt = require("jsonwebtoken")

router.post('/signup', userController.signup)

router.delete('/delete', userController.deleteAccount)

router.get('/:userName', userController.getSingleUser)

router.post('/login', (req, res, next)=>{
    User.findOne({userName: req.body.userName}).exec().then(
        doc=>{
            if(!doc){
                return res.status(404).json({Message: 'Wrong UserName!'})
            }
            bcr.compare(req.body.password, doc.password, (err, same)=>{
                if(err){
                    return res.status(500).json({Message: err.message})
                }
                if(same){
                    const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    },'secret_key', {expiresIn: "1h"})
                return res.status(200).json({Message: 'Auth Successful', Token: token})
                }
                res.status(409).json({Message: 'Wrong Password!'})
            })
        }
    ).catch(err=>{
        res.status(500).json({
            Message: err.message
        })
    })
})

module.exports = router;
