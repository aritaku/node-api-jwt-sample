import jwt from 'jsonwebtoken';
import config from '../config';

export default class JwtUtil {
  static async produceUserJwt(userId) {
    const token = await jwt.sign({ userId }, config.jwtsecret, { expiresIn: '14d' });
    return token;
  }

  static async verifyToken(token) {
    await jwt.verify(token, config.jwtsecret, (jwtError, decoded) => {
      if ((jwtError) || !decoded || !(decoded.newMail)) {
        throw jwtError;
      }
      return decoded;
    });
  }
}
