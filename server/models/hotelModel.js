import { Schema, model } from "mongoose";

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    address: { type: String, required: true },
    images: [
      {
        type: String,
      },
    ],
    amenities: [
      {
        name: String,
      },
    ],
    location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
    rating: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Hotel = model("Hotels", hotelSchema);
export default Hotel;
