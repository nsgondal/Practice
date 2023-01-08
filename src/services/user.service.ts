import { IUser } from "../data-access/models/user-model";
import { UserRepository } from "../data-access/repository/user.repository";
import bcrypt from "bcrypt";
import  jwt from 'jsonwebtoken'


export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

  }

  async register(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password=hashedPassword;
    return this.userRepository.create(user);
  }

  async findById(id: string): Promise<IUser | null> {
    return this.userRepository.findById(id);
  }

  // async find(conditions: any): Promise<IUser[]> {
  //   return this.userRepository.find(conditions);
  // }

//   async update(id: string, user: IUser): Promise<IUser | null> {
//     return this.userRepository.update(id, user);
//   }

  async delete(id: string): Promise<IUser | null> {
    return this.userRepository.delete(id);
  }

  async login(user:any) {
    let existingUser:any=await this.userRepository.findByUsername(user.username);
    if(!existingUser){
      return null;
    }
    const isPasswordCorrect = await bcrypt.compare(user.password, existingUser.password);
    if(isPasswordCorrect){
      let jwt = createJWT(existingUser);
      return jwt;
    }
    return isPasswordCorrect;
  }
  
}
function createJWT(user:any) {
  // Get the user's ID and username
  const userId = user._id;
  const username = user.username;

  // Create the JWT payload
  const payload = {
    sub: userId,
    username
  };

  // Sign the JWT with a secret key
  let secretKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const options = {
    expiresIn: '1h'
  };
  const token = jwt.sign(payload, secretKey, options);

  // Return the JWT
  return {token: token};
}