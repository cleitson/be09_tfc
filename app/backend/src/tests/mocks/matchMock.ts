const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3MTAwMDIyfQ.vYAq2PKAI-hv86jaRnR_6quqTwgHKmUZzwHqIKPIxUw'

const allMatchesMock = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  }
]

const inProgressMock = [
  {
    "id": 41,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamId": 6,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }
]

const doneProgressMock = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
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
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  }
]
const matchByIdMock = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 1,
  "awayTeamId": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
  "homeTeam": {
    "teamName": "São Paulo"
  },
  "awayTeam": {
    "teamName": "Grêmio"
  }
}
const updatedMatchMock = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 20,
  "awayTeamId": 8,
  "awayTeamGoals": 11,
  "inProgress": false,
  "homeTeam": {
    "teamName": "São Paulo"
  },
  "awayTeam": {
    "teamName": "Grêmio"
  }
}


const newResultMock = {
  "homeTeamGoals": 20,
  "awayTeamGoals": 11
}
const newMatchMock = {
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}
const homeTeamMock = {
  "id": 1,
  "teamName": "Avaí/Kindermann"
}
const awayTeamMock = {
  "id": 2,
  "teamName": "Bahia"
}
const sameTeamMock = {
  "homeTeamId": 1,
  "awayTeamId": 1,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const createdMatchMock = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamId": 8,
  "awayTeamGoals": 2,
  "inProgress": true
}

export {
  allMatchesMock,
  inProgressMock,
  doneProgressMock,
  matchByIdMock,
  updatedMatchMock,
  newResultMock,
  token,
  newMatchMock,
  homeTeamMock,
  awayTeamMock,
  createdMatchMock,
  sameTeamMock
}