import { Request, Response, NextFunction } from 'express';
import joi = require('joi');

const matchSchema = joi.object({
  homeTeamGoals: joi.number().required(),
  awayTeamGoals: joi.number().required(),
});

const createMatchSchema = joi.object({
  homeTeamId: joi.number().required(),
  awayTeamId: joi.number().required(),
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

const newMatchValidation = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
  const { error } = createMatchSchema.validate({
    homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });
  if (error) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  if (homeTeamId === awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  next();
};
export { matchValidation, newMatchValidation };
