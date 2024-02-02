import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import loginMiddleware from '../middlewares/loginMiddleware';

const userController = new UserController();
const router = Router();
router.post(
  '/',
  loginMiddleware,
  async (req: Request, res: Response) => userController.getUserByEmail(req, res),
);

export default router;
