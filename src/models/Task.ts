import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  text: string;
  done: boolean;
}

const TaskSchema = new Schema<ITask>(
  {
    text: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<ITask>("Task", TaskSchema);
