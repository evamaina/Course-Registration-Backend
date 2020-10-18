import express from 'express';
import User from './models/user.model';

const router = express.Router();

router.get('/users', (req, res) => {
  const userModel = new User();
  const users = userModel.getAll();
  return res.status(200).json(users);
});

router.get('/users/:id', (req, res) => {
  const userModel = new User();
  const { id } = req.params;
  const user = userModel.get(id);
  const status = user === -1 ? 404 : 200;
  return res.status(status).json(user);
});

export default router;
