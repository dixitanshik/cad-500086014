const express = require("express");
const adminController = require("../Controllers/adminController");

const adminRoutes = express();

adminRoutes.get("/",adminController.blogOne);

adminRoutes.get("/blog", adminController.blogTwo);

adminRoutes.get("/blogSetup", adminController.blogSetup);

module.exports = adminRoutes;