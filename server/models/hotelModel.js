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
    geoLocation: {
      type: {
        type: String,
        default: "Point",
        required: true,
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
        required: true,
      },
    },

    visitors: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        comments: {
          type: String,
        },
        rating: {
          type: Number,
          default: 1,
          max: 5,
        },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Hotel = model("Hotels", hotelSchema);
export default Hotel;
