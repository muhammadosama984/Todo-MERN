import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  Todos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Todo", todoSchema);
