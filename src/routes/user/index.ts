import { Router, Request, Response } from 'express';
import { CreateUserController } from '../../controllers/user/CreateUserController'
const router = Router();

const createUserControleller = new CreateUserController();

router.post("/", createUserControleller.create);



export default router;