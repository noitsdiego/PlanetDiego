import { Schema, model, Document } from "mongoose";

export interface ISong extends Document {
  title: string;
  artist: string;
  url: string;
  dedication?: string;
  date?: string;
}

const SongSchema = new Schema<ISong>(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true },
    dedication: String,
    date: String,
  },
  { timestamps: true }
);

export default model<ISong>("Song", SongSchema);
