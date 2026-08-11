//Implement complete CRUD operations.
//Create User
//Get All Users
//Get User by ID
//Update User
//Delete User
import UserModel from "../models/USER.model.js";
import type { USER } from "../interfaces/USER.interface.js";

export class UserServices {
  async createUser(body: USER) {
    return await UserModel.create(body);
  }
  async getAllUsers() {
    return await UserModel.find();
  }
  async getUserById(id: string | string[] | undefined) {
    return await UserModel.findById(id);
  }
  async updateUserByIdpartial(
    id: string | string[] | undefined,
    body: Partial<USER>,
  ) {
    return await UserModel.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });
  }
  async deleteUserById(id: string | string[] | undefined) {
    return await UserModel.findByIdAndDelete(id);
  }
}
