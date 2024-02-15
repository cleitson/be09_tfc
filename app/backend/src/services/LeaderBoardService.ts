import { PartidasFiltradas } from '../Interfaces/matches/ILeaderBoard';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import { IMatch } from '../Interfaces/matches/IMatch';
// import { ITeam } from '../Interfaces/teams/ITeam';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { resultadoFinal, partidasFiltradas, leaderBoard } from '../utils/resultados';

type AwayHome = 'home' | 'away';

export default class LeaderBoardService {
  constructor(
    private matchModel: MatchModel = new MatchModel(),
    private teamModel: TeamModel = new TeamModel(),
  ) { }

  async matchesFinished() {
    const allMatches = await this.matchModel.matchInProgress(false);
    return allMatches;
  }

  async filterResultByTeam(allMatches: IMatch[], awayHome: AwayHome) {
    const allTeams = await this.teamModel.findAll();
    const data:IMatch[][] = [];
    await Promise.all(allTeams.map(async (team) => {
      const filterTeam = allMatches.filter((match) => match[`${awayHome}TeamId`] === team.id);
      data.push(filterTeam);
    }));

    const result = await Promise.all(
      data.map(async (team) => Promise.all(team.map(async (match) => ({
        partida: match.id,
        time: (await this.teamModel.findById(match[`${awayHome}TeamId`]))?.teamName as string,
        golsFeitos: awayHome === 'home' ? match.homeTeamGoals : match.awayTeamGoals,
        golsRecebidos: awayHome === 'home' ? match.awayTeamGoals : match.homeTeamGoals,
        resultado: awayHome === 'home' ? resultadoFinal(match.homeTeamGoals, match.awayTeamGoals)
          : resultadoFinal(match.awayTeamGoals, match.homeTeamGoals),
      })))),
    );
    return result;
  }

  public async awayHomeBoard(awayHome: AwayHome): Promise<ServiceResponse<PartidasFiltradas[]>> {
    const finished = await this.matchesFinished();
    const filtro = await this.filterResultByTeam(finished, awayHome);
    const result = filtro.map((team) => partidasFiltradas(team));
    const resultadoOrdenado = result
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalPoints - a.totalPoints);

    return { status: 'SUCCESSFUL', data: resultadoOrdenado };
  }

  public async leaderBoardFull(): Promise<ServiceResponse<PartidasFiltradas[]>> {
    const finished = await this.matchesFinished();
    const home = await this.filterResultByTeam(finished, 'home');
    const away = await this.filterResultByTeam(finished, 'away');

    const resultHome = home.map((team) => partidasFiltradas(team));
    const resultAway = away.map((team) => partidasFiltradas(team));
    const final = [...resultHome, ...resultAway];
    const fil = leaderBoard(final);
    const resultadoOrdenado = fil
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalPoints - a.totalPoints);
    return { status: 'SUCCESSFUL', data: resultadoOrdenado };
  }
}
