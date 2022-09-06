import express from "express";
import Login from "../controllers/Login.controller.js";
import Register from "../controllers/Register.controller.js";
import { check } from "express-validator";
import { createTodo } from "../controllers/Todo.controller.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);

// Protected paths

apiProtected.post(
  "/createTodo",
  [check("desc", "Todo description is required").exists()],
  createTodo
);

export default apiRoute;
