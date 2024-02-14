import { Partidas, PartidasFiltradas } from '../Interfaces/matches/ILeaderBoard';

const resultadoFinal = (homeGoals: number, awayGoals: number): string => {
  if (homeGoals > awayGoals) return 'vitoria';
  if (homeGoals < awayGoals) return 'derrota';
  return 'empate';
};

const aproveitamento = (pontos: number, jogos: number): string => {
  const total = (pontos / (jogos * 3)) * 100;
  return total.toFixed(2);
};

const partidasFiltradas = (partidas: Partidas[]): PartidasFiltradas => {
  const totalPoints = partidas.reduce((acc, cur) => {
    if (cur.resultado === 'vitoria') return acc + 3;
    if (cur.resultado === 'empate') return acc + 1;
    return acc;
  }, 0);

  const goalsFavor = partidas.reduce((acc, cur) => acc + cur.golsFeitos, 0);
  const goalsOwn = partidas.reduce((acc, cur) => acc + cur.golsRecebidos, 0);

  return { name: partidas[0].time,
    totalPoints,
    totalGames: partidas.length,
    totalVictories: partidas.filter((partida) => partida.resultado === 'vitoria').length,
    totalDraws: partidas.filter((partida) => partida.resultado === 'empate').length,
    totalLosses: partidas.filter((partida) => partida.resultado === 'derrota').length,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: aproveitamento(totalPoints, partidas.length),
  };
};

export { resultadoFinal, aproveitamento, partidasFiltradas };
