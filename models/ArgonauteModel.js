const mongoose = require("mongoose");

const ArgonauteModel = mongoose.model(
  "argo-api",
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  "argonautes"
);

module.exports = { ArgonauteModel };
