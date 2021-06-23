import { Router, Request, Response } from "express";
import { CreateTagController } from '../../controllers/tags/CreateTagController';
import ensureAdmin from '../../middlewares/ensureAdmin';
const router = Router();

const createTagController = new CreateTagController();

router.post('/', ensureAdmin, createTagController.handle);

export default router;