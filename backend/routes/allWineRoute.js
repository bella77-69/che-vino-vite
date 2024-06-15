const express = require("express");
const router = express.Router();

const allwinesController = require("../controllers/allwines.controller");

//get all wines
router.get("/", allwinesController.getAllWines);

// get wine by ID
router.get("/:id", allwinesController.getWineByID);

// get wine by type
router.get("/search/:type", allwinesController.getWineByType);

// create new wine
router.post("/", allwinesController.createNewWine);

// update wine
router.put("/:id", allwinesController.updateWine);

// delete wine
router.delete("/:id", allwinesController.deleteWine);

module.exports = router;