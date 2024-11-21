import { Request, Response, NextFunction } from 'express';

export function serverError(err: Error, req: Request, res: Response, next: NextFunction) {
  logging.error(err.stack);
  res.sendStatus(500);
}
