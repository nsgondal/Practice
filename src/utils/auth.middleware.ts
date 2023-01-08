import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function verifyJWT(req: any, res: Response, next: NextFunction) {
  // Get the JWT from the request header
  const token = req.headers['authorization'];

  // If the token is not provided, return an error
  if (!token) {
    return res.status(401).send('Login to continue or No token provided ');
  }

  // Verify the JWT and get the payload
  try {
    const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token.');
  }
}
