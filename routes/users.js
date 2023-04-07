import express from "express"
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

/* READ */
// GET user
router.get("/:id", verifyToken, getUser)
// GET user friends
router.get("/:id/friends", verifyToken, getUserFriends)

/* UPDATE */
// PUT add/remove friend
router.patch("/:id/:friendId", verifyToken, addRemoveFriend)

export default router
