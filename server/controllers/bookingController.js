import bookings from "../models/bookingModel.js";
import roomType from "../models/roomType.js";

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
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
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
    const { userId, hotel, rooms, price, checkIn, checkOut, totalGuest } =
      req.body;
    const user = req.user;
    console.log("USER:", user);
    // if (!userId) {
    //   return res.status(404).json({ message: "Booking field must be set" });
    // }

    const roomData = await roomType.findOne({ _id: rooms });
    console.log("roomData:", roomData);

    // check for  available rooms
    if (roomData.noOfRooms <= 0) {
      return res.status(404).json({ message: "Room is not available" });
    }
    // checking if the total guest matches the maximum occupancy of the room

    if (totalGuest > roomData.maxOccupancy) {
      return res.status(404).json({
        message: `Sorry the number of guest is above the maximum occupancy of this room`,
      });
    }
    const bookedData = await bookings.create({
      userId: user._id,
      hotel,
      rooms,
      price,
      checkIn,
      checkOut,
      totalGuest,
    });
    // takes note of the total number of rooms after booking was successful
    roomData.noOfRooms--;
    await roomData.save();

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
