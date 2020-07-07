import { model, Schema } from "mongoose";
import { FileInterface } from "./types";

const schema: any = {
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
};

const options: any = {
  timestamps: true,
};

export default model<FileInterface>("File", new Schema(schema, options));