import express from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/user.js";
import { isAuthenticated, isOwner } from "../middlewares/index.js";

const router = express.Router();

router.route("/users").get(isAuthenticated, getAllUsers);
router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
router.patch("/users/:id", isAuthenticated, isOwner, updateUser);

export default router;
