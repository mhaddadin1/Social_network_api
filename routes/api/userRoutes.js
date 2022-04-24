const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  addFriend,
  removeFriend,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

// route to get all users or create a new user
router.route("/").get(getUsers).post(createUser);

//route to get, update, or delete a user by userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// route to add a friend or remove a friend from a user by userId and friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
