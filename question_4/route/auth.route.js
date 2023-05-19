const express = require("express");
const SignUpController = require("../controller/signup.controller");
const auth_route = express.Router();

auth_route.post("/signup", SignUpController);

module.exports = auth_route;
