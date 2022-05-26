import express from 'express';
import { login, logout, register, getSecret, redirectLogin } from '../controllers/index.js';

const router = express.Router();

router.post('/login', login);

router.get('/logout', logout);

router.post('/register', register);

router.get('/users/:id/secret', redirectLogin, getSecret);

export default router;
