import { validationResult } from "express-validator";
import Todo from "../models/Todo.js";
import User from "../models/User.js";
import { statusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";

export const RemoveTod = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.json(
      jsonGenerate(
        statusCode.VALIDATION_ERROR,
        "todo id is required",
        error.mapped()
      )
    );
  }

  try {
    const result = await Todo.findOneAndDelete({
      userId: req.userId,
      _id: req.body.todo_id,
    });

    if (result) {
      const user = await User.findOneAndUpdate(
        {
          _id: req.userId,
        },
        {
          $pull: { todos: req.body.todo_id },
        }
      );
      return res.json(jsonGenerate(statusCode.SUCCESS, "Todo deleted", null));
    }
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Todo not deleted", null)
    );
  }
};
