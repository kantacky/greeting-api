import { Request, Response } from 'express';

export function health(req: Request, res: Response) {
  res.status(200).json({ status: 'ok' });
}
