export type Partidas = {
  partida: number;
  time: string;
  golsFeitos: number;
  golsRecebidos: number;
  resultado: string;
};

export type PartidasFiltradas = {
  name: string;
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string
};
