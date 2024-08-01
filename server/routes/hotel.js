import { Router } from "express";
import {
  createHotel,
  deleteHotel,
  geoHotels,
  getHotelByID,
  rateAndComment,
  searchHotels,
  updateHotel,
} from "../controllers/hotelController.js";
const router = Router();

router.get("/search", searchHotels);
router.get("/searchGeo", geoHotels);
router.get("/search/:id", getHotelByID);
router.post("/addNew", createHotel);
router.patch("/addRating/:id", rateAndComment);
router.patch("/search/:id", updateHotel);
router.patch("/removeHotel/:id", deleteHotel);

export default router;
