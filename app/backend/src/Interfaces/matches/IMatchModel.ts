import { IMatch } from './IMatch';

export interface IMatchesModel {
  getMatches(): Promise<IMatch[]>;
  matchInProgress(progress: boolean): Promise<IMatch[]>;
  findMatch(matchId: number): Promise<IMatch | null>;
  finishMatch(matchId: number): Promise<void>;
  updateMatchResult(matchId: number, homeGoals: number, awayGoals: number): Promise<void>;
}
