import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
   
  }, 
  lastName: {
    type: String,
    required: true

  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model<IUser>('User', userSchema);

interface IUser extends mongoose.Document {
  firstName:string,
  lastName:string,
  username: string;
  password: string;
}

export { User, IUser };
