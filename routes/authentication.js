import express from "express";
import { signIn, signUp } from "../controllers/authentication.js";

const router = express.Router();

router.route("/auth/sign-up").post(signUp);
router.route("/auth/sign-in").post(signIn);

export default router;
