import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatus';

export default class UserController {
  constructor(
    private userService: UserService = new UserService(),
  ) { }

  public async getUserByEmail(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const { status, data } = await this.userService.getUserByEmail(email, password);
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json(data);
  }

  public async getUserRole(req: Request, res: Response): Promise<Response> {
    const { authorization } = req.headers as { authorization: string };
    const [, token] = authorization.split(' ');
    const { status, data } = await this.userService.getUserRole(token);
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
