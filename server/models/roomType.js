import { Schema, model } from "mongoose";
const RoomTypeSchema = new Schema({
  hotel: { type: Schema.Types.ObjectId, ref: "Hotels", required: true },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  amenities: [String],
  createdAt: { type: Date, default: Date.now },
});

const roomType = model("RoomType", RoomTypeSchema);
export default roomType;
