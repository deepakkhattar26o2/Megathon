const User = require("../Models/User");
const bcr = require("bcrypt");
exports.signup = (req, res, next) => {
  const emailId = req.body.emailId;
  User.findOne({ emailId: emailId })
    .exec()
    .then((doc) => {
      if (doc) {
        return res.status(409).json({ Message: "Account Already Exists!" });
      }
      const userName = req.body.userName;
      bcr.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ Message: err.message });
        }
        const newUser = new User({
          emailId: emailId,
          userName: userName,
          password: hash,
        });

        newUser
          .save()
          .then((result) => {
            res.status(200).json({ Message: "Account Made Successfully" });
            console.log(result);
          })
          .catch((err) => {
            res.status(500).json({ Message: err.message });
          });
      });
    })
    .catch((err) => {
      res.status(500).json({ Message: err.message });
    });
};

exports.deleteAccount = (req, res, next) => {
  User.deleteOne({ emailId: req.body.emailId })
    .exec()
    .then((result) => {
      if(result){
        res.status(200).json({ Message: "Account Deleted Succesfully" });
      }
      else{
          res.status(404).json({Message: "User Not Found!!"})
      }
    })
    .catch((err) => {
      res.status(500).json({ Message: err.message });
    });
};

exports.getSingleUser = (req, res, next)=>{
  const userName = req.params.userName
  User.findOne({userName: userName}).select('emailId userName').exec().then(
      user=>{
          res.status(200).json(user)
      }
  ).catch(err=>{
      res.status(500).json({
          Message: err.message
      })
  })
}

exports.userLogin =  (req, res, next)=>{
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
                      emailId: doc.emailId,
                      userName: doc.userName
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
}
