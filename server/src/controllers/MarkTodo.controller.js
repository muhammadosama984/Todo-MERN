import { validationResult } from "express-validator";
import Todo from "../models/Todo.js";
import { statusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";

export const MarkTodo = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty) {
    res.json(
      jsonGenerate(
        statusCode.VALIDATION_ERROR,
        "todo id is required",
        error.mapped()
      )
    );
  }

  try {
    const todo = await Todo.findOneAndUpdate(
      {
        _id: req.body.todo_id,
        userId: req.userId,
      },
      [
        {
          $set: {
            isCompleted: {
              $eq: [false, "$isCompleted"],
            },
          },
        },
      ]
    );
    if (todo) {
      res.json(jsonGenerate(statusCode.SUCCESS, "updated markdone", todo));
    }
  } catch (error) {
    res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "not updated", error)
    );
  }
};
