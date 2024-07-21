import Hotel from "../models/hotelModel.js";

// Get all hotels
export const getAllHotels = async (res, req) => {
  try {
    const { location } = req.query;
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//search hotel properties
export const searchHotels = async (res, req) => {
  try {
    const { name, location, minRating } = req.query;
    const filter = {};
    if (name) {
      filter.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
    }
    if (minRating) {
      filter.rating = { $gte: parseFloat(minRating) }; // Filter by minimum rating
    }
    const hotels = await Hotel.find(filter).populate("location").exec();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get specific properties or hotel
export const getHotelByID = async (res, req) => {
  try {
    const { id } = req.params;
    const data = await Hotel.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
