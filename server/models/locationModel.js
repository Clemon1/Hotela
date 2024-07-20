import { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String },
  country: { type: String, required: true },
  postalCode: { type: String },

  createdAt: { type: Date, default: Date.now },
});

const location = model("Location", LocationSchema);
export default location;
