import { JWT_TOKEN_SECRET, statusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";
import Jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  if (req.headers["auth"] === undefined) {
    return res.json(jsonGenerate(statusCode.AUTH_ERROR, "Excess denied"));
  }

  const token = req.headers["auth"];

  try {
    const decoded = Jwt.verify(token, JWT_TOKEN_SECRET);
    console.log(decoded);

    req.userId = decoded.userId;

    return next();
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Invalid token")
    );
  }
};

export default AuthMiddleware;
