import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatus';

export default class TeamController {
  constructor(
    private teamService: TeamService = new TeamService(),
  ) { }

  public async getAllTeams(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.teamService.getAllTeams();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.teamService.getTeamById(Number(id));
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
