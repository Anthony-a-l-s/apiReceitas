const express = require("express");
const router = express.Router();

const FoodController = require("../controllers/foodController")

router.get("/foods", FoodController.all);
router.post("/food",FoodController.create);


module.exports = router;