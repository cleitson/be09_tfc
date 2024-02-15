import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import LeaderBoardService from '../services/LeaderBoardService';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';
import * as board from './mocks/leaderBoardMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rota /leaderBoard', () => {
  afterEach(sinon.restore);

  it('Deve retornar o leaderBoard', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(board.allMatches as any);
    sinon.stub(SequelizeTeam, 'findAll').resolves(board.allTeams as any);
    // sinon.stub(LeaderBoardService.prototype, 'filterResultByTeam')
    // .onFirstCall()
    // .resolves(board.filterResultHome as any)
    // .onSecondCall()
    // .resolves(board.filterResultAway as any);
    // sinon.stub(LeaderBoardService.prototype, 'leaderBoardFull').resolves({ status: 'SUCCESSFUL', data: board.leaderBoardFull } as any);
    const { status, body} = await chai.request(app).get('/leaderBoard');
    expect(status).to.be.equal(200); 
    console.log(body);
       
  });
});