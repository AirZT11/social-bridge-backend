import express from "express"
import { login } from "../controllers/auth.js"

// This allows Express identify that these routes will all be configures and allow us to have these in separate files
const router = express.Router()

// This is the route that will be used to login
router.post("/login", login)

export default router
