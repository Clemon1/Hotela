import { Schema, model } from "mongoose";
const bookingShema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    userDetails: {
      firstName: String,
      lastName: String,
      email: String,
      phoneNumber: String,
      userType: {
        type: String,
        enum: ["User", "Guest"],
        default: "User",
      },
    },

    hotel: {
      type: Schema.Types.ObjectId,
      ref: "Hotels",
      required: true,
    },
    rooms: {
      type: Schema.Types.ObjectId,
      ref: "Rooms",
    },
    price: {
      type: Number,
      required: true,
    },

    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const bookings = model("bookings", bookingShema);

export default bookings;
