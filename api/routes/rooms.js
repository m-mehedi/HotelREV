import express from "express"
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.post("/:id", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);


export default router