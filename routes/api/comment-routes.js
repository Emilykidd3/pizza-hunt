const router = require("express").Router();
const {
  addComment,
  addReply,
  removeComment,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/:pizzaId add comment on a pizza
router.route("/:pizzaId").post(addComment);

// /api/comments/:pizzaId/:commentID add reply to a comment
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// /api/comments/:pizzaId/:commentId/:replyID delete a reply to a comment
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
