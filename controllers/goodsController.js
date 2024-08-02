const Goods = require("../models/goodsModels"); //importing schema
const mongoose = require("mongoose"); //importing mongoose
const ObjectId = mongoose.Types.ObjectId;

//post function
exports.createGoods = async (req, res) => {
  try {
    const goods = new Goods(req.body);
    await goods.save();
    res.status(201).send({
      status: "success",
      message: "Goods created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getGoods = async (req, res) => {
  try {
    const goods = await Goods.find();
    res.status(201).send({
      status: "success",
      count: goods.length,
      data: goods,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
