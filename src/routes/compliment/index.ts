import { Router } from 'express';
import { CreateComplimentController } from '../../controllers/Compliment/CreateComplimentController'
const router = Router();

const createComplimentController = new CreateComplimentController();

router.post("/", createComplimentController.handle);



export default router;