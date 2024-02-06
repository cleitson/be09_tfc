import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';
import { tokenAuth } from '../middlewares/loginMiddleware';

const teamController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => teamController.getMatches(req, res));
router.patch(
  '/:id/finish',
  tokenAuth,
  (req: Request, res: Response) => teamController.finishMatch(req, res),
);

export default router;
