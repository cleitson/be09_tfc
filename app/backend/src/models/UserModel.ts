import SequelizeUser from '../database/models/SequelizeUser';
import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findByEmail(email: string): Promise<IUser | null> {
    const dbData = await this.model.findOne({ where: { email } });
    if (!dbData) return null;
    return dbData;
  }

  async findById(id: number): Promise<IUser | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) return null;
    return dbData;
  }
}
