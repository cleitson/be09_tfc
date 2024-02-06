import { IMatch } from './IMatch';

export interface IMatchesModel {
  getMatches(): Promise<IMatch[]>;
  matchInProgress(progress: boolean): Promise<IMatch[]>;
}
