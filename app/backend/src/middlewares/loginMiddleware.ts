import { Request, Response, NextFunction } from 'express';
import joi = require('joi');
import * as jwt from 'jsonwebtoken';

const jtwPassword = process.env.SECRET || 'secret';

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginAuth = (req: Request, res: Response, next: NextFunction) => {
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

const tokenAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const [, token] = authorization.split(' ');
  try {
    const payload = jwt.verify(token, jtwPassword);
    res.locals.payload = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export { loginAuth, tokenAuth };
