import bookings from "../models/bookingModel.js";

// get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const data = await bookings
      .find()
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all users bookings
export const getUserBookings = async (req, res) => {
  try {
    const data = await bookings
      .find()
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
