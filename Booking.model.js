const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: "object",
  flight: "object",
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
  BookingModel,
};
