const dbConn = require('../config/db');

const AllComments = function (comment) {
  this.comment_text = comment.comment_text;
   this.review_id = comment.review_id;
   this.comment_name = comment.comment_name;
   this.comment_date  = comment.comment_date;
}

//get all Comments
AllComments.getAllComments = (result) => {
  dbConn.query("SELECT * FROM review_comment", (err, res) => {
    if (err) {
      console.log("Error while fetching All Comments", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get comments by comment id
AllComments.getByCommentId = (id, result) => {
  dbConn.query(
    "SELECT * FROM review_comment WHERE comment_id= ?",
    id,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by comment_id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//get comments by review_id
AllComments.getByCommentsid = (id, result) => {
  dbConn.query(
    "SELECT * FROM review_comment WHERE review_id= ?",
   id,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by review_id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );  
};

  // create a new comment 
  AllComments.createNewComment = (CommentsReqData, result) => {
    dbConn.query(
      "INSERT INTO review_comment SET ?",
      CommentsReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("comment created successfully");
          result(null, res);
        }
      }
    );
  };
  
  
  // //get comment by ID for update
  // AllComments.getCommentByID = (id, result) => {
  //   dbConn.query("SELECT * FROM review_comments WHERE id=?", id, (err, res) => {
  //     if (err) {
  //       console.log("Error while fetching comment by id", err);
  //       result(null, err);
  //     } else {
  //       result(null, res);
  //     }
  //   });
  // };
  
  //update comment
  AllComments.updateComment = (id, CommentsReqData, result) => {
    dbConn.query(
      "UPDATE review_comment SET comment_text=?, comment_date=?, comment_name=?  WHERE comment_id = ?",
      [ CommentsReqData.comment_text, CommentsReqData.comment_date, CommentsReqData.comment_name, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating Comments");
          result(null, err);
        } else {
          console.log("Comments updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete comment
  AllComments.deleteComment = (id, result) => {
    dbConn.query("DELETE from review_comment WHERE comment_id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the comment");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = AllComments;