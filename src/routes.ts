import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router: Router = Router();
const createUserController: CreateUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router };