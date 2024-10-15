//After /users the remaining part is handled here

import express from "express";
import { getProfile } from "../../controllers/userController.js";

const router = express.Router();

export const userRouter = router.get('/profile', getProfile)