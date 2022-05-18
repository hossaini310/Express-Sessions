import { validateLogin, validateRegister } from './validators.js';
import { users } from '../models/users.js';

const login = (req, res) => {};

const logout = (req, res) => { };

const register = (req, res) => { };

const getSecret = (req, res) => {
  const user = users.find((el) => el.id === Number(req.params.id));
  if (!user) return res.status(404).send('Server error!');
  res.status(200).send(user.secret);
};

export { login, logout, register, getSecret };
