import { Router, Request, Response } from 'express';
import { CreateUserController } from '../../controllers/user/CreateUserController'
const router = Router();

const createUserController = new CreateUserController();

router.post("/", createUserController.handle);



export default router;