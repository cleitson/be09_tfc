import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';

const teamController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => teamController.getMatches(req, res));

export default router;
