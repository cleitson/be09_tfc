import { IMatch } from './IMatch';

export interface IMatchesModel {
  getMatches(): Promise<IMatch[]>;
}
