const { Router } = require("express");
const { createGoods, getGoods } = require("../controllers/goodsController");

const router = Router();

router.post("/goods", createGoods);
router.get("/goods", getGoods);

module.exports = router;
