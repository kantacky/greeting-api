import express from 'express';
import './config/logging';

import { serverConfig } from './config/config';

import { corsHandler } from './middleware/corsHandler';
import { loggingHandler } from './middleware/loggingHandler';
import { notFound } from './middleware/notFound';
import { serverError } from './middleware/serverError';

import { health } from './route/__/health';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(loggingHandler);
app.use(corsHandler);

app.get('/__/health', health);

app.all("*", notFound);

app.use(serverError);

export const server = app.listen(3000, () => {
  logging.info(`Listen on http://${serverConfig.SERVER_HOSTNAME}:${serverConfig.SERVER_PORT}`);
});
