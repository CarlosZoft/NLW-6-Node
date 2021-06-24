import { Router, Request, Response } from 'express';
import { AuthenticateUserController } from '../../controllers/auth/AuthenticateUserController'
const router = Router();

const authenticateUserController = new AuthenticateUserController();

router.post("/", authenticateUserController.handle);



export default router;