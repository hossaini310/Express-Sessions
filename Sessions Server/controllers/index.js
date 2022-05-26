import { validateLogin, validateRegister } from './validators.js';
import { users } from '../models/users.js';
import Cryptr from 'cryptr';

const login = (req, res) => {
  if (!validateLogin(req.body)) return res.status(400).send('Your input has a wrong format!');
  const { email, password } = req.body;
  const user = users.find((el) => el.email === email && el.password === password);
  if (user) {
    const { id, name } = user;
    console.log(req.session);
    req.session.userid = id;
    return res.status(200).send(user);
  }
  res.status(401).end();
};

const logout = (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).end();
};

const register = (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = users.find((el) => el.email === req.body.email);
  if (user) return res.status(400).send('User already exists!');

  const newUser = {
    id: Math.max(...users.map((el) => el.id)) + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(newUser);
  res.send(newUser);
};

const getSecret = (req, res) => {
  const user = users.find((el) => el.id === Number(req.params.id));
  if (!user) return res.status(404).send('Server error!');
  res.status(200).send(user.secret);
};

const redirectLogin = (req, res, next) => {
  if (!req.session.userid) res.status(400).send('You are not logged in!');
  else next();
};

export { login, logout, register, getSecret, redirectLogin };
