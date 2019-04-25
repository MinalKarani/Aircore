const router = require("express").Router();
const homesController = require("../../controllers/homesController");

// Matches with "/api/books"
router.route("/")
  .get(homesController.findAll)
  .post(homesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(homesController.findById)
  .put(homesController.update)
  .delete(homesController.remove);

// /api/books/about
router
  .route("/about")
  .get(homesController.findAll)
  .post(homesController.create);

module.exports = router;
