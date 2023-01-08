import * as express from 'express';


import alertRoutes from './alert.route';
import contactRoutes from './contact.route';
import userRoutes from './user.route'

export default function mountRoutes(app: express.Application) {
  app.use(express.json());
  app.use('/contacts', contactRoutes);
  app.use('/alerts', alertRoutes);
  app.use('/auth', userRoutes);
}
