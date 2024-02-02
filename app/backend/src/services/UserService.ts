import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
// import { IUser } from '../Interfaces/users/IUser';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

type UserToken = {
  token: string;
};
export default class UserService {
  private jtwPassword = process.env.SECRET || 'secret';
  constructor(
    private userModel: UserModel = new UserModel(),
  ) { }

  public async getUserByEmail(email: string, pass: string): Promise<
  ServiceResponse<UserToken>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    const validPassword = await bcrypt.compare(pass, user.password);
    if (!validPassword) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const token = jwt.sign({ id: user.id }, this.jtwPassword);
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
