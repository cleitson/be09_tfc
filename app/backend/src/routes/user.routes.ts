import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import { loginAuth, tokenAuth } from '../middlewares/loginMiddleware';

const userController = new UserController();
const router = Router();
router.post(
  '/',
  loginAuth,
  async (req: Request, res: Response) => userController.getUserByEmail(req, res),
);
router.get(
  '/role',
  tokenAuth,
  (_req: Request, res: Response) => res.status(200).json({ role: res.locals.payload.role }),
);

export default router;
