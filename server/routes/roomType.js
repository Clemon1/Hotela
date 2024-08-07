import { Router } from "express";
import {
  createRooms,
  getAllRooms,
  getRoomsById,
  updateRoomType,
} from "../controllers/roomsController.js";
import { upload } from "../middlewares/multer/upload.js";

const router = Router();

router.get("/:roomId", getAllRooms);
router.get("/:id", getRoomsById);
router.post(
  "/createRoom",
  upload.fields([{ name: "roomImages", maxCount: 5 }]),
  createRooms,
);
router.patch("/:id", updateRoomType);

export default router;
