import { Router } from "express";
import {
  getSingleBookings,
  getUserBookings,
  newBooking,
  updateBokingStatus,
} from "../controllers/bookingController.js";
import { verifyToken } from "../middlewares/JWT.js";
const router = Router();

router.get("/userBooking", verifyToken, getUserBookings);
router.get("/userBooking/:id", getSingleBookings);
router.post("/createBooking", verifyToken, newBooking);
router.patch("/userBooking/:id", updateBokingStatus);
export default router;
