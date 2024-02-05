import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

// @ts-ignore
import chaiHttp = require('chai-http');
import { userMock, jwtMock }  from './mocks/userMock';

import { App } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rota /login', () => {
  afterEach(sinon.restore);

  it('deve retorar erro 400 ao não preencher todos os campos', async () => {
    const { status } = await chai.request(app).post('/login').send({});
    expect(status).to.be.equal(400);
  });

  it('deve retornar erro 401 ao preencher os campos com valores inválidos', async () => {
    const { status } = await chai.request(app).post('/login').send({ email: 'email', password: 'pass' });
    expect(status).to.be.equal(401);
  });

  it('deve retornar erro 401 ao entrar com email invalido', async () => {
    const email = 'not@found.email';
    sinon.stub(SequelizeUser, 'findOne' ).resolves(null);
    const { status } = await chai.request(app).post('/login').send({ email, password: 'any-password' });
    expect(status).to.be.equal(401);
  });

  it('deve retornar erro 401 ao entrar com email valido mas senha invalida', async () => {
    const email = 'found@email.com';
    const password = 'invalid-password';
    sinon.stub(SequelizeUser, 'findOne' ).resolves(userMock as any);
    sinon.stub(bcrypt, 'compare').resolves(false);
    const { status } = await chai.request(app).post('/login').send({ email, password });
    expect(status).to.be.equal(401);
  });

  it('Deve gerar um token ao receber credenciais válidas', async () => {
    sinon.stub(SequelizeUser, 'findOne' ).resolves(userMock as any);
    sinon.stub(bcrypt, 'compare').resolves(true);
    sinon.stub(jwt, 'sign').resolves('any-token');

    const email = 'found@email.com';
    const password = 'valid-password';

    const { status, body } = await chai.request(app).post('/login').send({ email, password });
    expect(status).to.be.equal(200);
  });
});

describe('Rota /login/role', () => {
  afterEach(sinon.restore);

  it('Deve retornar erro ao não enviar token', async () => {
    const { status } = await chai.request(app).get('/login/role');
    expect(status).to.be.equal(401);
  })

  it('Deve retornar erro ao enviar o typo de token inválido', async () => {
    const { status, body } = await chai.request(app).get('/login/role').set('authorization', 'any-token');
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Token must be a valid token' });    
  });

  it('Deve retornar erro ao enviar um token inválido', async () => {
    sinon.stub(jwt, 'verify').throws(new Error('any-error'));
    const { status, body } = await chai.request(app).get('/login/role').set('authorization', 'Bearer any');
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Token must be a valid token' });
  });

  it('Deve retornar o papel do usuário ao enviar um token válido', async () => {
    const { status, body } = await chai.request(app).get('/login/role').set('authorization', jwtMock);
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ role: 'user' });
  });
});