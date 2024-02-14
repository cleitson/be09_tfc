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
    const allMatches = await this.matchModel.getMatches();
    const finishMatch = allMatches.filter((match: IMatch) => match.inProgress === false);
    return finishMatch;
  }

  async filterResultByTeam(allMatches: IMatch[], id: number) {
    const filterTeam = allMatches.filter((match) => match.homeTeamId === id);
    const filtered = Promise.all(filterTeam.map(async (match) => ({
      partida: match.id,
      time: (await this.teamModel.findById(match.homeTeamId))?.teamName as string,
      golsFeitos: match.homeTeamGoals,
      golsRecebidos: match.awayTeamGoals,
      resultado: resultadoFinal(match.homeTeamGoals, match.awayTeamGoals),
    })));
    return filtered;
  }

  public async homeBoard(): Promise<ServiceResponse<PartidasFiltradas[]>> {
    const data: PartidasFiltradas[] = [];
    const finished = await this.matchesFinished();
    const promises = finished.map(async (match) => {
      const filtro = await this.filterResultByTeam(finished, match.homeTeamId);
      const result = partidasFiltradas(filtro);
      data.push(result);
    });
    await Promise.all(promises);
    // const resultadoOrdenado = result.sort((a, b) => b.totalPoints - a.totalPoints);

    return { status: 'SUCCESSFUL', data };
  }
}
