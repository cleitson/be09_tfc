import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { IMatch } from '../Interfaces/matches/IMatch';
import { ITeam } from '../Interfaces/teams/ITeam';
import { IMatchesModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchesModel {
  private model = SequelizeMatch;
  private teamModel = SequelizeTeam;

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

  async findMatch(matchId: number): Promise<IMatch | null> {
    const dbData = await this.model.findOne({ where: { id: matchId },
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
    if (!dbData) return null;
    return dbData;
  }

  async finishMatch(matchId: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id: matchId } });
  }

  async updateMatchResult(matchId: number, homeGoals: number, awayGoals: number): Promise<void> {
    await this.model.update(
      {
        homeTeamGoals: homeGoals,
        awayTeamGoals: awayGoals,
      },
      { where: { id: matchId } },
    );
  }

  async findTeam(teamId: number): Promise<ITeam | null> {
    const dbData = await this.teamModel.findOne({ where: { id: teamId } });
    if (!dbData) return null;
    return dbData;
  }

  async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatch> {
    const dbData = await this.model.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return dbData;
  }
}
