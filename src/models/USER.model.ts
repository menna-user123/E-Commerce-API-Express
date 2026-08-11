import type { USER } from "../interfaces/USER.interface.js";
import mongoose, { model } from "mongoose";
const UserSchema = new mongoose.Schema<USER>(
  {
    Username: {
      type: "string",
      required: [true, "must be name of user"],
    },
    email: {
      type: "string",
      required: [true, "must be email of user"],
    },
    phonenum: {
      type: "string",
      required: [true, "must be phone number of user"],
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const UserModel = model("USERS", UserSchema);
export default UserModel;
