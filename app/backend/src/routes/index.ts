import { Router } from 'express';
import TeamRouter from './team.routes';
import UserRouter from './user.routes';

const routes = Router();

routes.use('/teams', TeamRouter);
routes.use('/login', UserRouter);

export default routes;
