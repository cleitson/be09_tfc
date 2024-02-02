import { Request, Response, NextFunction } from 'express';
import joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default loginMiddleware;
