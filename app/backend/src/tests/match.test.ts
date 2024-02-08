import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import * as match from './mocks/matchMock'
import SequelizeTeam from '../database/models/SequelizeTeam';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rota Get /matches', () => {
  afterEach(sinon.restore);

  it('Deve retornar todos os jogos', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(match.allMatchesMock as any);
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(match.allMatchesMock);
  })

  it('Deve retornar todos jogos em andamento', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(match.inProgressMock as any);
    const response = await chai.request(app).get('/matches?inProgress=true');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(match.inProgressMock);
  })

  it('Deve retornar todos os jogos finalizados', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(match.doneProgressMock as any);
    const response = await chai.request(app).get('/matches?inProgress=false');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(match.doneProgressMock);
  })
});

describe('Rota Post /matches', () => {
  afterEach(sinon.restore);

  it('Deve criar uma partida', async () => {
    sinon.stub(SequelizeTeam, 'findOne').onFirstCall().resolves(match.homeTeamMock as any).onSecondCall().resolves(match.awayTeamMock as any);
    sinon.stub(SequelizeMatch, 'create').resolves(match.createdMatchMock as any);
    const response = await chai.request(app).post('/matches').set('authorization', match.token).send(match.newMatchMock);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(match.createdMatchMock);
  })

  it('Deve retornar erro 404 ao não encontrar um time', async () => {
    sinon.stub(SequelizeTeam, 'findOne').onFirstCall().resolves(match.homeTeamMock as any).onSecondCall().resolves(null);
    // sinon.stub(SequelizeMatch, 'create').resolves(match.createdMatchMock as any);
    const response = await chai.request(app).post('/matches').set('authorization', match.token).send(match.newMatchMock);
    expect(response.status).to.be.equal(404);
  });

  it('Deve retornar erro 422 ao criar uma partida com times iguais', async () => {
    const response = await chai.request(app).post('/matches').set('authorization', match.token).send(match.sameTeamMock);
    expect(response.status).to.be.equal(422);
  });

  it('Deve retornar erro 400 ao criar uma partida inválida', async () => {
    const response = await chai.request(app).post('/matches').set('authorization', match.token).send({ homeTeamId: 1 });
    expect(response.status).to.be.equal(400);
  })
})

describe('Rota Patch /matches/:id', () => {
  afterEach(sinon.restore);

  it('Deve atualizar uma partida', async () => {
    sinon.stub(SequelizeMatch, 'findOne').resolves(match.matchByIdMock as any);
    sinon.stub(SequelizeMatch, 'update').resolves(match.updatedMatchMock as any);
    const response = await chai.request(app).patch('/matches/1').set('authorization', match.token).send(match.newResultMock);
    expect(response.status).to.be.equal(200);
  })

  it('Deve retornar erro 400 ao inserir resultado inválido', async () => {
    const response = await chai.request(app).patch('/matches/1').set('authorization', match.token).send({ homeTeamGoals: 20 });
    expect(response.status).to.be.equal(400);
  })

  it('Deve retornar erro 404 ao não encontrar uma partida', async () => {
    sinon.stub(SequelizeMatch, 'findOne').resolves(null);
    const response = await chai.request(app).patch('/matches/1').set('authorization', match.token).send(match.newResultMock);
    expect(response.status).to.be.equal(404);    
  })
})

describe('Rota Patch /matches/:id/finish', () => {
  afterEach(sinon.restore);
  it('Deve finalizar uma partida', async () => {
    sinon.stub(SequelizeMatch, 'findOne').resolves(match.matchByIdMock as any);
    sinon.stub(SequelizeMatch, 'update').resolves(match.updatedMatchMock as any);
    const response = await chai.request(app).patch('/matches/1/finish').set('authorization', match.token);
    expect(response.status).to.be.equal(200);
  })

  it('Deve retornar erro 404 ao não encontrar uma partida', async () => {
    sinon.stub(SequelizeMatch, 'findOne').resolves(null);
    const response = await chai.request(app).patch('/matches/1/finish').set('authorization', match.token);
    expect(response.status).to.be.equal(404);
  })
})