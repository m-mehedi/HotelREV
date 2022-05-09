import express from "express"
import { getAllUsers, register, login } from "../controllers/auth.js"
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/", getAllUsers)

export default router