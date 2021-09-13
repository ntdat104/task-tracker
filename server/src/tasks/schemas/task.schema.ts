import * as mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  text: String,
  day: String,
  reminder: Boolean,
});
