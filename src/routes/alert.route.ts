import * as express from 'express';
import { IAlert } from '../data-access/models/alert-model';
import { AlertService } from '../services/alert.service';
import { verifyJWT } from '../utils/auth.middleware';


const router = express.Router();
const alertService = new AlertService();

router.get('/',verifyJWT, async (req, res) => {
  try {
    let page=req.query.page;
    let limit=req.query.limit
    let order=req.query.order||-1
    const alerts = await alertService.find(page,limit,order);
    res.send(alerts);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/getcount',verifyJWT, async (req, res) => {
  try {
    const stats = await alertService.getCount();
    if (!stats) {
      res.status(404).send('Contact not found');
      return;
    }
    res.send(stats);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/',verifyJWT, async (req, res) => {
  try {
    let id:any=req.query.id;
    const alert = await alertService.findById(id);
    if (!alert) {
      res.status(404).send('Alert not found');
      return;
    }
    res.send(alert);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/',verifyJWT, async (req, res) => {
  try {
    const alert: IAlert = req.body;
    const createdAlert = await alertService.create(alert);
    res.send(createdAlert);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id',verifyJWT, async (req, res) => {
  try {
    const alert: IAlert = req.body;
    const updatedAlert = await alertService.update(req.params.id, alert);
    if (!updatedAlert) {
      res.status(404).send('Alert not found');
      return;
    }
    res.send(updatedAlert);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id',verifyJWT, async (req, res) => {
  try {
    const deletedAlert = await alertService.delete(req.params.id);
    if (!deletedAlert) {
      res.status(404).send('Alert not found');
      return;
    }
    res.send(deletedAlert);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
