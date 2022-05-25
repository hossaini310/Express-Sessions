import { validateLogin, validateRegister } from './validators.js';
import { users } from '../models/users.js';

const login = (req, res) => {};

const logout = (req, res) => {};

const register = (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = users.find((el) => el.email === req.body.email);
  if (user) return res.status(400).send('User already exists!');

  const newUser = {
    id: Math.max(...users.map((el) => el.id)) + 1,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    secret: 'tygiugvhhuhvvhc',
  };

  users.push(newUser);
  res.send(newUser);
};

const getSecret = (req, res) => {
  const user = users.find((el) => el.id === Number(req.params.id));
  if (!user) return res.status(404).send('Server error!');
  res.status(200).send(user.secret);
};

export { login, logout, register, getSecret };
