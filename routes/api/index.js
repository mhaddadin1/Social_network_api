const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");

const userRoutes = require("./userRoutes");

router.use("/thought", thoughtRoutes);

router.use("/users", userRoutes);

module.exports = router;
