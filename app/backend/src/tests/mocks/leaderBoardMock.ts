const allMatches = [
	{
		"id": 1,
		"homeTeamId": 16,
		"homeTeamGoals": 1,
		"awayTeamId": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 16,
		"away_team_id": 8,
		"homeTeam": {
			"teamName": "São Paulo"
		},
		"awayTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeamId": 9,
		"homeTeamGoals": 1,
		"awayTeamId": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 9,
		"away_team_id": 14,
		"homeTeam": {
			"teamName": "Internacional"
		},
		"awayTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 3,
		"homeTeamId": 4,
		"homeTeamGoals": 3,
		"awayTeamId": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 4,
		"away_team_id": 11,
		"homeTeam": {
			"teamName": "Corinthians"
		},
		"awayTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 4,
		"homeTeamId": 3,
		"homeTeamGoals": 0,
		"awayTeamId": 2,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 3,
		"away_team_id": 2,
		"homeTeam": {
			"teamName": "Botafogo"
		},
		"awayTeam": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 5,
		"homeTeamId": 7,
		"homeTeamGoals": 1,
		"awayTeamId": 10,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 7,
		"away_team_id": 10,
		"homeTeam": {
			"teamName": "Flamengo"
		},
		"awayTeam": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 6,
		"homeTeamId": 5,
		"homeTeamGoals": 1,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 5,
		"away_team_id": 13,
		"homeTeam": {
			"teamName": "Cruzeiro"
		},
		"awayTeam": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 7,
		"homeTeamId": 12,
		"homeTeamGoals": 2,
		"awayTeamId": 6,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 12,
		"away_team_id": 6,
		"homeTeam": {
			"teamName": "Palmeiras"
		},
		"awayTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 8,
		"homeTeamId": 15,
		"homeTeamGoals": 0,
		"awayTeamId": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 15,
		"away_team_id": 1,
		"homeTeam": {
			"teamName": "São José-SP"
		},
		"awayTeam": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 9,
		"homeTeamId": 1,
		"homeTeamGoals": 0,
		"awayTeamId": 12,
		"awayTeamGoals": 3,
		"inProgress": false,
		"home_team_id": 1,
		"away_team_id": 12,
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"awayTeam": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 10,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 9,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 2,
		"away_team_id": 9,
		"homeTeam": {
			"teamName": "Bahia"
		},
		"awayTeam": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 11,
		"homeTeamId": 13,
		"homeTeamGoals": 1,
		"awayTeamId": 3,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 13,
		"away_team_id": 3,
		"homeTeam": {
			"teamName": "Real Brasília"
		},
		"awayTeam": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 12,
		"homeTeamId": 6,
		"homeTeamGoals": 0,
		"awayTeamId": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 6,
		"away_team_id": 4,
		"homeTeam": {
			"teamName": "Ferroviária"
		},
		"awayTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 13,
		"homeTeamId": 8,
		"homeTeamGoals": 2,
		"awayTeamId": 5,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 8,
		"away_team_id": 5,
		"homeTeam": {
			"teamName": "Grêmio"
		},
		"awayTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 14,
		"homeTeamId": 14,
		"homeTeamGoals": 2,
		"awayTeamId": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 14,
		"away_team_id": 16,
		"homeTeam": {
			"teamName": "Santos"
		},
		"awayTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 15,
		"homeTeamId": 10,
		"homeTeamGoals": 0,
		"awayTeamId": 15,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 10,
		"away_team_id": 15,
		"homeTeam": {
			"teamName": "Minas Brasília"
		},
		"awayTeam": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 16,
		"homeTeamId": 11,
		"homeTeamGoals": 0,
		"awayTeamId": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 11,
		"away_team_id": 7,
		"homeTeam": {
			"teamName": "Napoli-SC"
		},
		"awayTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 17,
		"homeTeamId": 1,
		"homeTeamGoals": 2,
		"awayTeamId": 8,
		"awayTeamGoals": 3,
		"inProgress": false,
		"home_team_id": 1,
		"away_team_id": 8,
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"awayTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 18,
		"homeTeamId": 12,
		"homeTeamGoals": 4,
		"awayTeamId": 5,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 12,
		"away_team_id": 5,
		"homeTeam": {
			"teamName": "Palmeiras"
		},
		"awayTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 19,
		"homeTeamId": 11,
		"homeTeamGoals": 2,
		"awayTeamId": 2,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 11,
		"away_team_id": 2,
		"homeTeam": {
			"teamName": "Napoli-SC"
		},
		"awayTeam": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 20,
		"homeTeamId": 7,
		"homeTeamGoals": 0,
		"awayTeamId": 9,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 7,
		"away_team_id": 9,
		"homeTeam": {
			"teamName": "Flamengo"
		},
		"awayTeam": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 21,
		"homeTeamId": 6,
		"homeTeamGoals": 3,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 6,
		"away_team_id": 13,
		"homeTeam": {
			"teamName": "Ferroviária"
		},
		"awayTeam": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 22,
		"homeTeamId": 4,
		"homeTeamGoals": 3,
		"awayTeamId": 3,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 4,
		"away_team_id": 3,
		"homeTeam": {
			"teamName": "Corinthians"
		},
		"awayTeam": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 23,
		"homeTeamId": 15,
		"homeTeamGoals": 2,
		"awayTeamId": 16,
		"awayTeamGoals": 3,
		"inProgress": false,
		"home_team_id": 15,
		"away_team_id": 16,
		"homeTeam": {
			"teamName": "São José-SP"
		},
		"awayTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 24,
		"homeTeamId": 10,
		"homeTeamGoals": 2,
		"awayTeamId": 14,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 10,
		"away_team_id": 14,
		"homeTeam": {
			"teamName": "Minas Brasília"
		},
		"awayTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 25,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 2,
		"away_team_id": 6,
		"homeTeam": {
			"teamName": "Bahia"
		},
		"awayTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 26,
		"homeTeamId": 13,
		"homeTeamGoals": 1,
		"awayTeamId": 1,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 13,
		"away_team_id": 1,
		"homeTeam": {
			"teamName": "Real Brasília"
		},
		"awayTeam": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 27,
		"homeTeamId": 5,
		"homeTeamGoals": 1,
		"awayTeamId": 15,
		"awayTeamGoals": 2,
		"inProgress": false,
		"home_team_id": 5,
		"away_team_id": 15,
		"homeTeam": {
			"teamName": "Cruzeiro"
		},
		"awayTeam": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 28,
		"homeTeamId": 16,
		"homeTeamGoals": 3,
		"awayTeamId": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 16,
		"away_team_id": 7,
		"homeTeam": {
			"teamName": "São Paulo"
		},
		"awayTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 29,
		"homeTeamId": 9,
		"homeTeamGoals": 0,
		"awayTeamId": 4,
		"awayTeamGoals": 4,
		"inProgress": false,
		"home_team_id": 9,
		"away_team_id": 4,
		"homeTeam": {
			"teamName": "Internacional"
		},
		"awayTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 30,
		"homeTeamId": 3,
		"homeTeamGoals": 0,
		"awayTeamId": 12,
		"awayTeamGoals": 4,
		"inProgress": false,
		"home_team_id": 3,
		"away_team_id": 12,
		"homeTeam": {
			"teamName": "Botafogo"
		},
		"awayTeam": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 31,
		"homeTeamId": 8,
		"homeTeamGoals": 2,
		"awayTeamId": 10,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 8,
		"away_team_id": 10,
		"homeTeam": {
			"teamName": "Grêmio"
		},
		"awayTeam": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 32,
		"homeTeamId": 14,
		"homeTeamGoals": 5,
		"awayTeamId": 11,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 14,
		"away_team_id": 11,
		"homeTeam": {
			"teamName": "Santos"
		},
		"awayTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 33,
		"homeTeamId": 1,
		"homeTeamGoals": 1,
		"awayTeamId": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 1,
		"away_team_id": 16,
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"awayTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 34,
		"homeTeamId": 9,
		"homeTeamGoals": 3,
		"awayTeamId": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 9,
		"away_team_id": 6,
		"homeTeam": {
			"teamName": "Internacional"
		},
		"awayTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 35,
		"homeTeamId": 10,
		"homeTeamGoals": 1,
		"awayTeamId": 5,
		"awayTeamGoals": 3,
		"inProgress": false,
		"home_team_id": 10,
		"away_team_id": 5,
		"homeTeam": {
			"teamName": "Minas Brasília"
		},
		"awayTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 36,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 7,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 2,
		"away_team_id": 7,
		"homeTeam": {
			"teamName": "Bahia"
		},
		"awayTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 37,
		"homeTeamId": 15,
		"homeTeamGoals": 0,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 15,
		"away_team_id": 13,
		"homeTeam": {
			"teamName": "São José-SP"
		},
		"awayTeam": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 38,
		"homeTeamId": 14,
		"homeTeamGoals": 2,
		"awayTeamId": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 14,
		"away_team_id": 4,
		"homeTeam": {
			"teamName": "Santos"
		},
		"awayTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 39,
		"homeTeamId": 3,
		"homeTeamGoals": 2,
		"awayTeamId": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"home_team_id": 3,
		"away_team_id": 11,
		"homeTeam": {
			"teamName": "Botafogo"
		},
		"awayTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 40,
		"homeTeamId": 12,
		"homeTeamGoals": 4,
		"awayTeamId": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"home_team_id": 12,
		"away_team_id": 8,
		"homeTeam": {
			"teamName": "Palmeiras"
		},
		"awayTeam": {
			"teamName": "Grêmio"
		}
	}
];
const allTeams = [
	{
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
	{
		"id": 4,
		"teamName": "Corinthians"
	},
	{
		"id": 5,
		"teamName": "Cruzeiro"
	},
	{
		"id": 6,
		"teamName": "Ferroviária"
	},
	{
		"id": 7,
		"teamName": "Flamengo"
	},
	{
		"id": 8,
		"teamName": "Grêmio"
	},
	{
		"id": 9,
		"teamName": "Internacional"
	},
	{
		"id": 10,
		"teamName": "Minas Brasília"
	},
	{
		"id": 11,
		"teamName": "Napoli-SC"
	},
	{
		"id": 12,
		"teamName": "Palmeiras"
	},
	{
		"id": 13,
		"teamName": "Real Brasília"
	},
	{
		"id": 14,
		"teamName": "Santos"
	},
	{
		"id": 15,
		"teamName": "São José-SP"
	},
	{
		"id": 16,
		"teamName": "São Paulo"
	}
];
const filterResultHome = [
	{
		"name": "Santos",
		"totalPoints": 9,
		"totalGames": 3,
		"totalVictories": 3,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 9,
		"goalsOwn": 3,
		"goalsBalance": 6,
		"efficiency": "100.00"
	},
	{
		"name": "Palmeiras",
		"totalPoints": 7,
		"totalGames": 3,
		"totalVictories": 2,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 10,
		"goalsOwn": 5,
		"goalsBalance": 5,
		"efficiency": "77.78"
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 6,
		"goalsOwn": 1,
		"goalsBalance": 5,
		"efficiency": "100.00"
	},
	{
		"name": "Grêmio",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": "100.00"
	},
	{
		"name": "Real Brasília",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 2,
		"goalsOwn": 0,
		"goalsBalance": 2,
		"efficiency": "100.00"
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": "66.67"
	},
	{
		"name": "Internacional",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 4,
		"goalsOwn": 6,
		"goalsBalance": -2,
		"efficiency": "44.44"
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 2,
		"goalsOwn": 4,
		"goalsBalance": -2,
		"efficiency": "44.44"
	},
	{
		"name": "Ferroviária",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 3,
		"goalsOwn": 2,
		"goalsBalance": 1,
		"efficiency": "50.00"
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 2,
		"goalsOwn": 2,
		"goalsBalance": 0,
		"efficiency": "33.33"
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 2,
		"goalsOwn": 3,
		"goalsBalance": -1,
		"efficiency": "16.67"
	},
	{
		"name": "Flamengo",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 2,
		"goalsBalance": -1,
		"efficiency": "16.67"
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 3,
		"goalsOwn": 6,
		"goalsBalance": -3,
		"efficiency": "11.11"
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 3,
		"goalsOwn": 7,
		"goalsBalance": -4,
		"efficiency": "11.11"
	},
	{
		"name": "São José-SP",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": "0.00"
	},
	{
		"name": "Bahia",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 0,
		"goalsOwn": 4,
		"goalsBalance": -4,
		"efficiency": "0.00"
	}
];

const filterResultAway = [
	{
		"name": "Palmeiras",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 7,
		"goalsOwn": 0,
		"goalsBalance": 7,
		"efficiency": "100.00"
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 3,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 6,
		"goalsOwn": 2,
		"goalsBalance": 4,
		"efficiency": "66.67"
	},
	{
		"name": "Internacional",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 0,
		"goalsBalance": 3,
		"efficiency": "100.00"
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 1,
		"goalsBalance": 2,
		"efficiency": "100.00"
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 5,
		"goalsBalance": 0,
		"efficiency": "44.44"
	},
	{
		"name": "Ferroviária",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 4,
		"goalsOwn": 5,
		"goalsBalance": -1,
		"efficiency": "44.44"
	},
	{
		"name": "Real Brasília",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 3,
		"goalsOwn": 4,
		"goalsBalance": -1,
		"efficiency": "44.44"
	},
	{
		"name": "Grêmio",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 7,
		"goalsBalance": -2,
		"efficiency": "44.44"
	},
	{
		"name": "Flamengo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": "44.44"
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 1,
		"goalsBalance": 0,
		"efficiency": "50.00"
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 3,
		"totalGames": 3,
		"totalVictories": 1,
		"totalDraws": 0,
		"totalLosses": 2,
		"goalsFavor": 6,
		"goalsOwn": 7,
		"goalsBalance": -1,
		"efficiency": "33.33"
	},
	{
		"name": "Santos",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 3,
		"goalsOwn": 3,
		"goalsBalance": 0,
		"efficiency": "33.33"
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 2,
		"goalsOwn": 2,
		"goalsBalance": 0,
		"efficiency": "33.33"
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": "16.67"
	},
	{
		"name": "Botafogo",
		"totalPoints": 0,
		"totalGames": 2,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 2,
		"goalsFavor": 1,
		"goalsOwn": 4,
		"goalsBalance": -3,
		"efficiency": "0.00"
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 1,
		"goalsOwn": 10,
		"goalsBalance": -9,
		"efficiency": "0.00"
	}
];

const leaderBoardFull = [
	{
		"name": "Palmeiras",
		"totalPoints": 13,
		"totalGames": 5,
		"totalVictories": 4,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 17,
		"goalsOwn": 5,
		"goalsBalance": 12,
		"efficiency": "86.67"
	},
	{
		"name": "Corinthians",
		"totalPoints": 12,
		"totalGames": 5,
		"totalVictories": 4,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 12,
		"goalsOwn": 3,
		"goalsBalance": 9,
		"efficiency": "80.00"
	},
	{
		"name": "Santos",
		"totalPoints": 11,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 12,
		"goalsOwn": 6,
		"goalsBalance": 6,
		"efficiency": "73.33"
	},
	{
		"name": "Grêmio",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 8,
		"goalsBalance": 1,
		"efficiency": "66.67"
	},
	{
		"name": "Internacional",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 7,
		"goalsOwn": 6,
		"goalsBalance": 1,
		"efficiency": "66.67"
	},
	{
		"name": "Real Brasília",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 4,
		"goalsBalance": 1,
		"efficiency": "66.67"
	},
	{
		"name": "São Paulo",
		"totalPoints": 8,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 2,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 6,
		"goalsBalance": 3,
		"efficiency": "53.33"
	},
	{
		"name": "Flamengo",
		"totalPoints": 8,
		"totalGames": 6,
		"totalVictories": 2,
		"totalDraws": 2,
		"totalLosses": 2,
		"goalsFavor": 5,
		"goalsOwn": 5,
		"goalsBalance": 0,
		"efficiency": "44.44"
	},
	{
		"name": "Ferroviária",
		"totalPoints": 7,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 7,
		"goalsOwn": 7,
		"goalsBalance": 0,
		"efficiency": "46.67"
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 5,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 5,
		"goalsOwn": 6,
		"goalsBalance": -1,
		"efficiency": "40.00"
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 8,
		"goalsOwn": 10,
		"goalsBalance": -2,
		"efficiency": "26.67"
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 8,
		"goalsBalance": -4,
		"efficiency": "26.67"
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 3,
		"goalsOwn": 8,
		"goalsBalance": -5,
		"efficiency": "26.67"
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 2,
		"goalsOwn": 6,
		"goalsBalance": -4,
		"efficiency": "13.33"
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 9,
		"goalsBalance": -5,
		"efficiency": "13.33"
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 6,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 4,
		"goalsFavor": 3,
		"goalsOwn": 15,
		"goalsBalance": -12,
		"efficiency": "11.11"
	}
];
export { allMatches, allTeams, filterResultHome, filterResultAway, leaderBoardFull }