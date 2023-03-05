const express = require("express");
const { createUser, userLogin } = require("../../controller/user.controller");

const router = express.Router();
router.route("/").post(createUser);
router.route("/login").post(userLogin);
module.exports = router;
