const express = require("express");
const router = express.Router();

const allwinesController = require("../controllers/allwines.controller");

//get all records
router.get("/", allwinesController.getAllWines);

// get user by ID
router.get("/:id", allwinesController.getWineByID);

// get ID for Update
router.get("/search/:winery", allwinesController.getWineByWinery);

// create new user
router.post("/", allwinesController.createNewWine);

// update user
router.put("/:id", allwinesController.updateWine);

// delete user
router.delete("/:id", allwinesController.deleteWine);

module.exports = router;