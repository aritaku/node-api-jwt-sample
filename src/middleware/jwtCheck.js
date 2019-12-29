import JwtUtil from '../util/jwtUtil';
import actionResponse from '../response/actionResponse';

export default class JwtCheck {
  static async verifyJwt(req, res, next) {
    if (req.header('Authorization') && req.header('Authorization').split(' ')[0] === 'Bearer') {
      try {
        const decoded = await JwtUtil.verifyUserJwt(req.header('Authorization'));
        res.locals.decoded = decoded;
        next();
      } catch (error) {
        res.status(401).json(actionResponse(false, 'Authorization error'));
      }
    } else {
      res.status(401).json(actionResponse(false, 'Authorization error'));
    }
  }
}
