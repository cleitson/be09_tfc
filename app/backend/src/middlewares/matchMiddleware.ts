import { Request, Response, NextFunction } from 'express';
import joi = require('joi');

const matchSchema = joi.object({
  homeTeamGoals: joi.number().required(),
  awayTeamGoals: joi.number().required(),
});

const matchValidation = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const { error } = matchSchema.validate({ homeTeamGoals, awayTeamGoals });
  if (error) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  next();
};

export default matchValidation;
