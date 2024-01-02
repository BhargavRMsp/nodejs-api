import express from "express";
import { signIn, signUp } from "../controllers/authentication.js";
import { rateLimitMiddleware } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.route("/auth/sign-up").post(rateLimitMiddleware, signUp);
router.route("/auth/sign-in").post(rateLimitMiddleware, signIn);

export default router;
