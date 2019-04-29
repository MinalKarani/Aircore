const router = require("express").Router();
const homeRoutes = require("./homes.js");
const userRoutes = require("./users.js");


// Home routes
router.use("/homes", homeRoutes);
//User routes
router.use("/register", userRoutes);

module.exports = router;
