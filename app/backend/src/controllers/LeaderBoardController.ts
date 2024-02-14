import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import mapStatusHTTP from '../utils/mapStatus';

export default class LeaderBoardController {
  constructor(
    private leaderBoardService: LeaderBoardService = new LeaderBoardService(),
  ) { }

  public async homeBoard(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.leaderBoardService.awayHomeBoard('home');
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async awayBoard(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.leaderBoardService.awayHomeBoard('away');
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
