import axios from "axios";
import { LOGIN } from "./apiConstant.js";

export const login = async (data) => {
  return axios.post(LOGIN, data);
};
