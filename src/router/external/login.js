import express from 'express';
import LoginController from '../../controller/LoginController';

const router = express.Router();

router.post('/login', LoginController.user);
router.post('/signup', LoginController.signup);

module.exports = router;
