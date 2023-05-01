import { Request, Response } from "express";
import { UserDetails } from "../../entities/users";
import userDbRepository from "../../application/repositories/userDbRepository";

export default class authController {
  userRepository: userDbRepository;
  constructor(userRepository: userDbRepository) {
    this.userRepository = userRepository ;
  }
  
  async registerUser(req: Request, res: Response) {
    const { name, mobile, email, pword }: UserDetails = req.body;
  }
}
