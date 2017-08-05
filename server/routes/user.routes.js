import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Users
router.route('/users').get(UserController.getUsers);

// Get one User by id
router.route('/users/:id').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

// Add a new User
router.route('/users/login').post(UserController.loginUser);

// Update user
router.route('/users/:id').put(UserController.editUser);

// Delete a User by id
router.route('/users/:id').delete(UserController.deleteUser);

export default router;
