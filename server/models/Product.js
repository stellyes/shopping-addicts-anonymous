const mongoose = require('mongoose');

const { Schema } = mongoose;

const product = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Array,
    default: [0]
  },
  sizes: {
    type: Array,
    default: ["One Size"]
  }
});

const Product = mongoose.model('Product', product);

module.exports = Product;
