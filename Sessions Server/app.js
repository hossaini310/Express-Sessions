import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

const {PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } = process.env;

app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen( PORT ?? 5000, () => console.log('server running'));