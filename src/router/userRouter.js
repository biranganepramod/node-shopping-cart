const express = require('express');
const userRouter = express.Router();
const UserController = require('../controller/userController');

const userController = new UserController();

userRouter.get('/user', userController.getAllUsers);

userRouter.post('/user', userController.createNewUser);

module.exports = userRouter;