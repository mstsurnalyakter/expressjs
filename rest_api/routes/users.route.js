const router = require('express').Router();
const { getAllUsers, createUsers, updateUsers, deleteUser } = require("../controller/users.controller");



// user route
router.get("/", getAllUsers);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUser)

module.exports = router;
