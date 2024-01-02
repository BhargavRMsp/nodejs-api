import express from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/user.js";
import { isAuthenticated, isOwner } from "../middlewares/index.js";
import { rateLimitMiddleware } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.route("/users").get(rateLimitMiddleware, isAuthenticated, getAllUsers);
router.delete(
  "/users/:id",
  rateLimitMiddleware,
  isAuthenticated,
  isOwner,
  deleteUser
);
router.patch(
  "/users/:id",
  rateLimitMiddleware,
  isAuthenticated,
  isOwner,
  updateUser
);

export default router;
