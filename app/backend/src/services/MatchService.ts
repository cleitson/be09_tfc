import { IMatch } from '../Interfaces/matches/IMatch';
import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchService {
  constructor(
    private matchModel: MatchModel = new MatchModel(),
  ) { }

  public async getMatches(): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.getMatches();
    return { status: 'SUCCESSFUL', data: matches };
  }
}
