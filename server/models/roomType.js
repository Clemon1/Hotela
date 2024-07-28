import { Schema, model } from "mongoose";
const RoomTypeSchema = new Schema(
  {
    hotel: { type: Schema.Types.ObjectId, ref: "Hotels", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
    amenities: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const roomType = model("RoomType", RoomTypeSchema);
export default roomType;
