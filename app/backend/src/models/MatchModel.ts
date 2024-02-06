import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchesModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchesModel {
  private model = SequelizeMatch;

  async getMatches(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ nest: true,
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ] });
    return dbData;
  }

  async matchInProgress(progress: boolean): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ where: { inProgress: progress },
      nest: true,
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ] });
    return dbData;
  }
}
