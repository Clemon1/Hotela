import express, { Router } from "express";
import {
  getSingleBookings,
  getUserBookings,
  newBooking,
  stripeHook,
  stripePayment,
  updateBokingStatus,
} from "../controllers/bookingController.js";
import { verifyToken } from "../middlewares/JWT.js";
const router = Router();

router.get("/userBooking", verifyToken, getUserBookings);
router.get("/userBooking/:id", getSingleBookings);
router.post("/createBooking", verifyToken, newBooking);
router.post("/createBooking/stripe", verifyToken, stripePayment);
router.post("/createBooking/verify", stripeHook);
router.patch(
  "/userBooking/:id",
  express.json({ type: "application/json" }),
  updateBokingStatus,
);
export default router;
