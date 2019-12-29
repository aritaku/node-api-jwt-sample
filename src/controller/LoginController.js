import actionResponse from '../response/actionResponse';
import loginResponse from '../response/loginResponse';

export default class LoginController {
  static async user(req, res) {
    const { email, password } = req.body;
    // parameter check
    if (!email) {
      return res.status(400).json(actionResponse(false, null));
    }
    if (!password) {
      return res.status(400).json(actionResponse(false, null));
    }
    // login account check
    let user;
    return res.status(200).json(loginResponse('jwtString', null, user));
  }

  static async signup(req, res) {
    const user = req.body;
    // signup & create user
    return res.status(200).json(actionResponse(true, null, user));
  }
}
