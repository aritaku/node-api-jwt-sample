import express from 'express';
import UserController from '../../controller/UserController';

const router = express.Router();

router.get('/', UserController.getUsers);

module.exports = router;
