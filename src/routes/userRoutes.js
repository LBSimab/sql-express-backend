 const express =  require("express");
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController.js");
 router = express.Router();


router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


module.exports = router;