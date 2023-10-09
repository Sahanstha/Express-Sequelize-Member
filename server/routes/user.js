const router = require("express").Router();
const userController = require("../controllers/user");

router.route("/").post(userController.createUser).get(userController.listUser);
router
  .route("/:id")
  .get(userController.showUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
