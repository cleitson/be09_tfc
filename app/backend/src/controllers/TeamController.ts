import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatus';

export default class TeamController {
  constructor(
    private teamService: TeamService = new TeamService(),
  ) { }

  public async getAllTeams(req: Request, res: Response): Promise<Response> {
    const allTeams = await this.teamService.getAllTeams();
    return res.status(200).json(allTeams.data);
  }

  public async getTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const team = await this.teamService.getTeamById(Number(id));
    if (team.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(team.status)).json(team.data);
    }
    return res.status(200).json(team.data);
  }
}
