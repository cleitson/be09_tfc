import { PartidasFiltradas } from '../Interfaces/matches/ILeaderBoard';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import { IMatch } from '../Interfaces/matches/IMatch';
// import { ITeam } from '../Interfaces/teams/ITeam';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { resultadoFinal, partidasFiltradas } from '../utils/resultados';

export default class LeaderBoardService {
  constructor(
    private matchModel: MatchModel = new MatchModel(),
    private teamModel: TeamModel = new TeamModel(),
  ) { }

  async matchesFinished() {
    const allMatches = await this.matchModel.matchInProgress(false);
    return allMatches;
  }

  async filterResultByTeam(allMatches: IMatch[]) {
    const allTeams = await this.teamModel.findAll();
    const data:IMatch[][] = [];
    await Promise.all(allTeams.map(async (team) => {
      const filterTeam = allMatches.filter((match) => match.homeTeamId === team.id);
      data.push(filterTeam);
    }));

    const result = await Promise.all(
      data.map(async (team) => Promise.all(team.map(async (match) => ({
        partida: match.id,
        time: (await this.teamModel.findById(match.homeTeamId))?.teamName as string,
        golsFeitos: match.homeTeamGoals,
        golsRecebidos: match.awayTeamGoals,
        resultado: resultadoFinal(match.homeTeamGoals, match.awayTeamGoals),
      })))),
    );
    return result;
  }

  public async homeBoard(): Promise<ServiceResponse<PartidasFiltradas[]>> {
    const finished = await this.matchesFinished();
    const filtro = await this.filterResultByTeam(finished);
    const result = filtro.map((team) => partidasFiltradas(team));
    const resultadoOrdenado = result
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalPoints - a.totalPoints);

    return { status: 'SUCCESSFUL', data: resultadoOrdenado };
  }
}
