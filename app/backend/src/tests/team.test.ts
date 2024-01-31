import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeTeam from '../database/models/SequelizeTeam';
import { allTeams, team }  from './mocks/teamMock';

import { App } from '../app';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rota /team', () => {
  afterEach(sinon.restore);

  it('Deve retornar todos os times', async () => {
    sinon.stub(SequelizeTeam, 'findAll').resolves(allTeams as any);

    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(allTeams);
  });

  it('Deve retornar um time', async () => {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(team);
  });

  it('Deve retornar erro 404 ao não encontrar um time', async () => {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/1');
    expect(status).to.be.equal(404);
    expect(body).to.be.deep.equal({ message: 'Team not found' });
  });
  
});