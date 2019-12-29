import actionResponse from '../response/actionResponse';

export default class UserController {
  static async getUsers(req, res) {
    let users;
    // get user data
    return res.status(200).json(actionResponse(true, null, users));
  }
}
