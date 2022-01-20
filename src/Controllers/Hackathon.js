const User = require("../Models/User");
const Hackathon = require("../Models/Hackathon");
const validurl = require("valid-url");

exports.getAll = (req, res, next) => {
  Hackathon.find()
    .exec()
    .then((docs) => {
      if (docs.length < 1) {
        return res.status(404).json({
          Message: "No Hackathons Found!",
        });
      }
      res.status(200).json({ docs });
    })
    .catch((err) => {
      res.status(500).json({ Message: err.message });
    });
};

exports.createOne = (req, res, next) => {
  User.findOne({ userName: req.body.organizer })
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status(409).json({ Message: "No Such Organizer!" });
      }
      if (validurl.isUri(req.body.link)) {
        const newHackathon = new Hackathon({
          name: req.body.name,
          organizer: req.body.organizer,
          duration: req.body.duration,
          link: req.body.link,
          date: req.body.date
        });
        newHackathon
          .save()
          .then((doco) => {
            res.status(200).json({
              Message: "Hackathon Listed Successfully!!",
            });
          })
          .catch((err) => {
            res.status(500).json({ Message: err.message });
          });
      } else {
        res.status(409).json({ Message: "Invalid Link!!" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        Message: err.message,
      });
    });
};

exports.deleteOne = (req, res, next)=>{
    Hackathon.deleteOne({name : req.body.name}).exec().then(
        result=>{
            res.status(200).json({Message: 'Hackathon Deleted Successfully!!'})
        }
    ).catch(
        err=>{
            res.status(500).json({Message: err.message})
        }
    )
}