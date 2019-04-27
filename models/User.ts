import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  avatar: { type: String },
  age: { type: Number },
  gender: { type: String },
  shirtSize: { type: String },
  price: { type: Number },
  country: { type: String }
});

export const User = mongoose.model("User", userSchema);
