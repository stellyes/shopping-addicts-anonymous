const mongoose = require('mongoose');

const { Schema } = mongoose;

const discountCode = new Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0.01
    }
});

const DiscountCode = mongoose.model('DiscountCode', discountCode);

module.exports = DiscountCode;