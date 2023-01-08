import * as express from 'express';
import { IUser } from '../data-access/models/user-model';
import { UserService } from '../services/user.service';


const router = express.Router();
const userService = new UserService();

router.post('/register', async (req, res) => {
  try {
    const user: IUser = req.body;
    const createdUser = await userService.register(user);
    res.send(createdUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const creditional :any= req.body;
    const user = await userService.login(creditional);
    if (!user) {
      res.status(401).send('Invalid username or password');
      return;
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
