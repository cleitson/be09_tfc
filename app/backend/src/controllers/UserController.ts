import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatus';

export default class UserController {
  constructor(
    private userService: UserService = new UserService(),
  ) { }

  public async getUserByEmail(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await this.userService.getUserByEmail(email, password);
    if (user.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(user.status)).json(user.data);
    }
    return res.status(200).json(user.data);
  }
}
