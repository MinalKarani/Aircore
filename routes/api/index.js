const router = require("express").Router();
const homeRoutes = require("./homes");

// Home routes
router.use("/homes", homeRoutes);

module.exports = router;
