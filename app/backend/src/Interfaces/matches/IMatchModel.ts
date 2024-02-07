import { IMatch } from './IMatch';
import { ITeam } from '../teams/ITeam';

export interface IMatchesModel {
  getMatches(): Promise<IMatch[]>;
  matchInProgress(progress: boolean): Promise<IMatch[]>;
  findMatch(matchId: number): Promise<IMatch | null>;
  finishMatch(matchId: number): Promise<void>;
  updateMatchResult(matchId: number, homeGoals: number, awayGoals: number): Promise<void>;
  findTeam(teamId: number): Promise<ITeam | null>;
  createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatch>;
}
