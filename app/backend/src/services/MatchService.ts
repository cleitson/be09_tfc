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

  public async matchInProgress(progress: boolean): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.matchInProgress(progress);
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<{ message: string }>> {
    const match = await this.matchModel.findMatch(id);
    if (!match) return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    await this.matchModel.finishMatch(match.id);
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateMatchResult(
    id: number,
    homeGoals: number,
    awayGoals: number,
  ): Promise<ServiceResponse<{ message: string }>> {
    const match = await this.matchModel.findMatch(id);
    if (!match) return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    await this.matchModel.updateMatchResult(match.id, homeGoals, awayGoals);
    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  public async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<ServiceResponse<IMatch>> {
    const homeTeam = await this.matchModel.findTeam(homeTeamId);
    const awayTeam = await this.matchModel.findTeam(awayTeamId);
    if (!homeTeam || !awayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    const match = await this.matchModel.createMatch(
      homeTeam.id,
      awayTeam.id,
      homeTeamGoals,
      awayTeamGoals,
    );
    return { status: 'CREATED', data: match };
  }
}
