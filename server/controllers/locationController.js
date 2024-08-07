import location from "../models/locationModel.js";

// ALL lOCATION
export const allLocations = async (req, res) => {
  try {
    const area = await location.find();
    res.status(200).json(area);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const singleLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await location.findById(id);
    res.status(200).json(area);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createLocation = async (req, res) => {
  try {
    const { name, country } = req.body;
    const images = req.file ? req.file.path : null;
    const newArea = await location.create({
      name,
      country,
      images,
    });
    res.status(201).json(newArea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedArea = await location.findById(id, {
      $set: req.body,
    });
    res.status(201).json(updatedArea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
