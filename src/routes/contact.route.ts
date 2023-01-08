import * as express from 'express';
import { IContact } from '../data-access/models/contact-model';
import { ContactService } from '../services/contact.service';
import { verifyJWT } from '../utils/auth.middleware';


const router = express.Router();
const contactService = new ContactService();

router.get('/',verifyJWT, async (req, res) => {
  try {
    let page=req.query.page;
    let limit=req.query.limit
    let order=req.query.order||-1
    const contacts = await contactService.find(page,limit,order);
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/',verifyJWT, async (req, res) => {
  try {
    let id:any=req.query.id;
    const contact = await contactService.findById(id);
    if (!contact) {
      res.status(404).send('Contact not found');
      return;
    }
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/getcount',verifyJWT, async (req, res) => {
  try {
    const stats = await contactService.getCount();
    if (!stats) {
      res.status(404).send('Contact not found');
      return;
    }
    res.send(stats);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/',verifyJWT, async (req, res) => {
  try {
    const contact: IContact = req.body;
    const createdContact = await contactService.create(contact);
    res.send(createdContact);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id',verifyJWT, async (req, res) => {
  try {
    const contact: IContact = req.body;
    const updatedContact = await contactService.update(req.params.id, contact);
    if (!updatedContact) {
      res.status(404).send('Contact not found');
      return;
    }
    res.send(updatedContact);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id',verifyJWT, async (req, res) => {
  try {
    const deletedContact = await contactService.delete(req.params.id);
    if (!deletedContact) {
      res.status(404).send('Contact not found');
      return;
    }
    res.send(deletedContact);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
