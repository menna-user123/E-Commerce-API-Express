//Create User
//Get All Users
//Get User by ID
//Update User
//Delete User
import { APPERROR } from "../Utils/apperror.js";
import { UserServices } from "../services/USER.services.js";
import { type Response, type Request } from "express";

const Userservice = new UserServices();
export class Usercontroller {
  async createuser(req: Request, res: Response) {
    const user = await Userservice.createUser(req.body);
    if (!user) throw new APPERROR("user not created", 404);
    return res.status(201).json({ status: "user created" });
  }

  async getusers(req: Request, res: Response) {
    const users = await Userservice.getAllUsers();
    if (!users) throw new APPERROR("users not found", 404);
    return res.status(201).json({ status: "users found", data: users });
  }

  async getoneuser(req: Request, res: Response) {
    const user = await Userservice.getUserById(req.params.id);
    if (!user) throw new APPERROR("user not found", 404);
    return res.status(201).json({ status: "users found", data: user });
  }

  async updateuserpartial(req: Request, res: Response) {
    const user = await Userservice.updateUserByIdpartial(
      req.params.id,
      req.body,
    );
    if (!user) throw new APPERROR("user not updated", 404);
    return res.status(201).json({ status: "user updated", data: user });
  }

  async deleteuser(req: Request, res: Response) {
    const user = await Userservice.deleteUserById(req.params.id);
    if (!user) throw new APPERROR("user not deleted", 404);
    return res.status(201).json({ status: "user deleted" });
  }
}
