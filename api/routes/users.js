import express from "express"
import { deleteUser, getUser, updateUser, getAllUsers } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router()

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("You are logged in!");
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("You're authenticated to delete account!")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("You're authenticated to delete all accounts!")
})

router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, deleteUser);
router.get("/:id", verifyUser,getUser);
router.get("/", verifyAdmin, getAllUsers)


export default router