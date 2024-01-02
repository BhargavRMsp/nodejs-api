import express from "express";
import { UserModel, deleteUserById, getUserById } from "../model/userModel.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    res
      .status(200)
      .json({
        success: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
