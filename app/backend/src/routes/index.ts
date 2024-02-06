import { Router } from 'express';
import TeamRouter from './team.routes';
import UserRouter from './user.routes';
import Matches from './matches.routes';

const routes = Router();

routes.use('/teams', TeamRouter);
routes.use('/login', UserRouter);
routes.use('/matches', Matches);

export default routes;
