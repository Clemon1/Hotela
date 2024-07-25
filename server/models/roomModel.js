import { Schema, model } from "mongoose";

const RoomSchema = new Schema(
  {
    hotel: { type: Schema.Types.ObjectId, ref: "Hotels", required: true },
    roomType: { type: Schema.Types.ObjectId, ref: "RoomType", required: true },
    price: { type: Number, required: true },
    description: { type: String },
    amenities: [String],
    images: [String],
    maxOccupancy: { type: Number, required: true },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const rooms = model("Rooms", RoomSchema);
export default rooms;
