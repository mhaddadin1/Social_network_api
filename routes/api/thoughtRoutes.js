const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

//routes to get all thoughts and create a new thought
router.route("/").get(getThought).post(createThought);

// routes to get single thougth update thought and delete thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// route to create a reaction to a thought through thought id
router.route("/:thoughtId/reactions").post(addReaction);

// route to delete a reaction by reaction id and thought id
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
