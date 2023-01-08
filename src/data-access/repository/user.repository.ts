
import { IUser, User } from '../models/user-model';
import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }
  async findByUsername(username: string) {
  
   return User.findOne({username:username}).exec();
   
  }
 
  
}
