const mongoose = require("mongoose");

const { Schema } = mongoose;

const goodsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Goods = mongoose.model("goods", goodsSchema);

module.exports = Goods;
