const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: { type: "object" },
  flight: { type: "object" },
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
  BookingModel,
};
