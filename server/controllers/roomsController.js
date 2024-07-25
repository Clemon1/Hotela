import rooms from "../models/roomModel.js";

// Get all rooms by based on a Hotel
export const getAllRooms = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const allRooms = await rooms.find({ hotel: hotelId });
    res.status(200).json(allRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get specific room by ID
export const getRoomsById = async (req, res) => {
  try {
    const { roomId } = req.params;
    const data = await rooms.findById(roomId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// create a Room
export const createRooms = async (req, res) => {
  try {
    const { hotel, roomType, price, description, amenities, maxOccupancy } =
      req.body;
    const { images } = req.file ? req.file.path : null;

    const allRooms = await rooms.create({
      hotel,
      roomType,
      price,
      description,
      images,
      amenities,
      maxOccupancy,
    });
    res.status(201).json(allRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update room details
