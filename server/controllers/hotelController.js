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

// Search by GeoLocation --Google Map or MapBOX
export const geoHotels = async (res, req) => {
  try {
    // Query Params for Longitude and Latitude
    const { lng, lat } = req.query;
    const hotels = await Hotel.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          distanceField: "dist.calculated",
          maxDistance: 2,

          includeLocs: "dist.location",
          spherical: true,
        },
      },
    ]);
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

// create hotel
export const createHotel = async (req, res) => {
  try {
    const { name, description, address, amenities } = req.body;

    const { images } = req.files["photos"]
      ? req.files["photos"].map((file) => file.path)
      : null;
    const newHotel = await Hotel.create({
      name,
      description,
      address,
      images,
      amenities,
      location,
      geoLocation,
    });
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
