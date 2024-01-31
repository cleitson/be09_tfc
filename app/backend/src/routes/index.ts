import { Router } from 'express';
import TeamRouter from './team.routes';

const routes = Router();

routes.use('/teams', TeamRouter);

export default routes;
