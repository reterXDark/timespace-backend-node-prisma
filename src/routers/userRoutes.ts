import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/usersController";

const usersRouter = express.Router();

// all routes here are starting with users

usersRouter.get("/", getAllUsers);
usersRouter.post("/createUser", createUser);
usersRouter.delete("/deleteUser/:id", deleteUser);
usersRouter.patch("/updateUser/:id", updateUser);
usersRouter.get("/:id", getUser);

export default usersRouter;

// DATABASE_URL="mysql://root:qwerty@13QWE@localhost:3306/timespace?schema=public"
