import Hotel from "../models/hotelModel.js";
import location from "../models/locationModel.js";

// Get all hotels
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({ isDeleted: false });
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//search hotel properties
export const searchHotels = async (req, res) => {
  try {
    const { name, locationName, minRating } = req.query;

    // Find the area based on the location name
    const area = await location.findOne({
      name: { $regex: new RegExp(locationName, "i") },
    });

    if (!area) {
      return res.status(404).json({ message: "Location not found" });
    }

    // Build the filter object
    const filter = { location: area._id };

    if (name) {
      filter.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
    }

    if (minRating) {
      filter.rating = { $gte: parseFloat(minRating) }; // Filter by minimum rating
    }

    // Find hotels based on the filter
    const hotels = await Hotel.find(filter);

    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search by GeoLocation --Google Map or MapBOX
export const geoHotels = async (req, res) => {
  try {
    // Query Params for Longitude and Latitude
    const { lng, lat } = req.query;

    if (!lng || !lat) {
      return res
        .status(400)
        .json({ message: "Longitude and Latitude are required" });
    }

    const longitude = parseFloat(lng);
    const latitude = parseFloat(lat);

    if (isNaN(longitude) || isNaN(latitude)) {
      return res.status(400).json({ message: "Invalid Longitude or Latitude" });
    }

    const hotels = await Hotel.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          distanceField: "dist.calculated",
          maxDistance: 2000, // 2 kilometers
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
export const getHotelByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Hotel.findById(id).populate("location").exec();
    const ratings = data.visitors.map((vistor) =>
      vistor.rating.reduce((acc, vistor) => acc + vistor.rating, 0),
    );
    console.log("Hotel Rating", ratings);
    const formattedDATA = {
      ...data,
      rating: ratings,
    };
    res.status(200).json(formattedDATA);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create hotel
export const createHotel = async (req, res) => {
  try {
    const { name, description, address, amenities } = req.body;

    // login for multiple images
    const { images } = req.files["hotelImages"]
      ? req.files["hotelImages"].map((file) => file.path)
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

// update hotel data
export const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await Hotel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Rate and comment a hotel
export const rateAndComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment, rating } = req.body;

    const hotela = await Hotel.findById(id);
    // Check if a user has rated and commented in a specific hotel
    const existingRating = hotela.visitors.some((check) =>
      check.userId.equals(userId),
    );
    if (existingRating) {
      return res.status(401).json({ message: "Your feedback exist" });
    }
    // Comment and rate
    const newData = await Hotel.findByIdAndUpdate(id, {
      $push: {
        visitors: { userId, comment, rating },
      },
    });
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a hotel (Using soft delete method)
export const deleteHotel = async (req, res) => {
  try {
    // Performing soft delete
    const { id } = req.params;
    await Hotel.findByIdAndUpdate(id, {
      $set: { isDeleted: true },
    });
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
