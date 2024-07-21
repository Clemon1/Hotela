import { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const location = model("Location", LocationSchema);
export default location;
