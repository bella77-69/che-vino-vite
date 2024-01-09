const CommentsModel = require("../models/comments.model");

// get all comments
exports.getAllComments = (req, res) => {
  CommentsModel.getAllComments((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// get comment by id
exports.getByCommentId = (req, res) => {
  CommentsModel.getByCommentId(req.params.id, (err, user) => {
    if (err) res.send(err);
    // console.log("single email user data", user);
    res.send(user);
  });
};

// get comment by commentid
exports.getByCommentsid  = (req, res) => {
  CommentsModel.getByCommentsid (req.params.id, (err, user) => {
    if (err) res.send(err);
    // console.log("single email user data", user);
    res.send(user);
  });
};

 // create a new comment using the comment_id as the /:id
 exports.createNewComment = (req, res) => {
  const CommentsReqData = new CommentsModel(req.body);
 // console.log("AllWinesReqData", AllWinesReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CommentsModel.createNewComment(CommentsReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Comment Created Successfully",
        data: user.insertId,
      });
    });
  }
};


// // get comment  by ID  for Update
// exports.getCommentByID = (req, res) => {
//   //console.log('get user by id');
//   CommentsModel.getCommentByID(req.params.id, (err, user) => {
//     if (err) res.send(err);
//    // console.log("single user data", user);
//    res.send(user);
//   });
// };

// update comment
exports.updateComment = (req, res) => {
  const CommentsReqData = new CommentsModel(req.body);
  //  console.log("AllWinesReqData update", AllWinesReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CommentsModel.updateComment(req.params.id, CommentsReqData, (err, user) => {
      if (err) res.send(err);
      res.json({ status: true, message: "comment updated Successfully" });
    });
  }
};

// delete comment
exports.deleteComment = (req, res) => {
  CommentsModel.deleteComment(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Comment deleted successully!" });
  });
};
