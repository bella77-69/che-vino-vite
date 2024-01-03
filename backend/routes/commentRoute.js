const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment.controller");

//get all comments
router.get("/", commentController.getAllComments);

// get comment by comment_id
router.get("/:id", commentController.getByCommentId);

//get comments by review_id
router.get("/comment/:id", commentController.getByCommentsid);

// create new comment usiang the comment_id
router.post("/", commentController.createNewComment);

// update comment
router.put("/comments/:id", commentController.updateComment);

// delete comment
router.delete("/:id", commentController.deleteComment);

module.exports = router;