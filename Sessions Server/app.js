import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cryptr from 'cryptr';
import session from 'express-session';

dotenv.config();

const dirname = path.resolve();

const { PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } = process.env;

const app = express();
app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
      httpOnly: false,
      sameSite: false,
      secure: NODE_ENV === 'production',
    },
  }),
);
app.use(cookieParser(SESSION_SECRET));
app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT ?? 5000, () => console.log(`server running on ${PORT}`));
