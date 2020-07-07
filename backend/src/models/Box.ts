import { model, Schema } from "mongoose";
import { BoxInterface } from "./types";

const { ObjectId: fileType } = Schema.Types;
const schema: any = {
  title: {
    type: String,
    required: true,
  },
  files: [
    { 
      type: fileType, 
      ref: "File" 
    }
  ],
};

const options: any = {
  timestamps: true,
};

export default model<BoxInterface>("Box", new Schema(schema, options));