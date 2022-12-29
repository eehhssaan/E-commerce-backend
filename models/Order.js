const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const oderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    invoice: {
      type: Number,
      required: false,
    },
    cart: [{}],
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: false,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    shippingCost: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
    },
    shippingOption: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    cardInfo: {
      type: Object,
      required: false,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Delivered"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model(
  "Order",
  oderSchema.plugin(AutoIncrement, { inc_field: "invoice", start_seq: 10000 })
);

module.exports = Order;
