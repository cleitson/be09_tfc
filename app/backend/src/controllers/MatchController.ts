import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatus';

export default class MatchController {
  constructor(
    private matchService: MatchService = new MatchService(),
  ) { }

  public async getMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    if (inProgress) {
      const progress = inProgress === 'true';
      const { status, data } = await this.matchService.matchInProgress(progress);
      return res.status(mapStatusHTTP(status)).json(data);
    }
    const { status, data } = await this.matchService.getMatches();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
