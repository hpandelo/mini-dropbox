import { Document } from "mongoose";

export interface BoxInterface extends Document {
  title: string,
  files?: Array<any>,
  createdAt?: any,
};

export interface FileInterface extends Document {
  title: string,
  path: string,
};