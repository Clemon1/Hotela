import { Router } from "express";
import {
  checkSessionSuccess,
  cryptoPayment,
  getSingleBookings,
  getUserBookings,
  newBooking,
  stripePayment,
  updateBokingStatus,
} from "../controllers/bookingController.js";
import { verifyToken } from "../middlewares/JWT.js";
const router = Router();

router.get("/userBooking", verifyToken, getUserBookings);
router.get("/userBooking/:id", getSingleBookings);
router.post("/createBooking", newBooking);
router.post("/createBooking/stripe", verifyToken, stripePayment);
router.post("/createBooking/crypto", verifyToken, cryptoPayment);
router.post("/sessionSuccess", verifyToken, checkSessionSuccess);
export default router;
