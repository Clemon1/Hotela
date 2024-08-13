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
    const user = req.user;
    const data = await bookings
      .find({ userId: user._id })
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// getting details of a particular booking
export const getSingleBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await bookings
      .findById(id)
      .populate("userId")
      .populate("hotelId")
      .populate("rooms")
      .exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// add a new booking
export const newBooking = async (req, res) => {
  try {
    const { userId, hotel, rooms, price, checkIn, checkOut } = req.body;
    if (!userId) {
      return res.status(404).json({ message: "Booking field must be set" });
    }
    const user = req.user;
    const bookedData = await bookings.create({
      userId: user._id,
      hotel,
      rooms,
      price,
      checkIn,
      checkOut,
      bookingStatus,
      paymentStatus,
    });
    res.status(201).json(bookedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//updating booking detail in payments status
export const updateBokingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const bookedDetails = await bookings.findByIdAndUpdate(id, {
      $set: { bookingStatus: req.body },
    });
    res.status(200).json(bookedDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
