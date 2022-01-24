const Blog = require("../Models/blog");
const auth = require("../middleware/auth");
const User = require("../Models/User");

exports.createBlog = (req, res, next) => {
    User.findOne({ userName: req.body.author })
      .exec()
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            Message: "No User Found!",
          });
        }
        Blog.find({ title: req.body.title })
          .exec()
          .then((docs) => {
            if (docs.length >= 1) {
              return res
                .status(409)
                .json({ Message: "A Blog With The Same Title Already Exists!!" });
            }
            const newBlog = new Blog({
              author: req.body.author,
              title: req.body.title,
              content: req.body.content,
            });
            newBlog
              .save()
              .then((doc) => {
                res.status(200).json({ Message: "Blog Created Successfully!!" });
              })
              .catch((err) => {
                res.status(500).json({ Message: err.message });
              });
          })
          .catch((err) => {
            res.status(500).json({ Message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
  }

exports.getAll =  (req, res, next)=>{
  Blog.find().exec().then(
      docs=>{
          if(docs.length<1){
              return res.status(404).json({Message: 'No Blogs Found!'})
          }
          res.status(200).json(docs)
      }
  ).catch(
      err=>{
          res.status(500).json({Message: err.message})
      }
  )
}

exports.getByTitle = (req, res, next)=>{
  Blog.findOne({title: req.params.title}).exec().then(
    doc=>{
      if(!doc){
        return res.status(404).json({Message: 'No Blog Found!'})
      }
      res.status(200).json(doc)
    }
  ).catch(
    err=>{
      res.status(500).json({Message: err.message})
    }
  )
}

exports.deleteByTitle = (req, res, next)=>{
  Blog.deleteOne({title: req.body.title}).exec().then(
    doc=>{
      res.status(200).json({Message: 'Blog Deleted Successfully!!'})
    }
  ).catch(
    err=>{
      res.status(500).json({Message: err.message})
    }
  )
}