import { Router, Request, Response } from 'express';
import { CreateUserController } from '../../controllers/user/CreateUserController'
import { ListUserReceiveController } from '../../controllers/user/ListUserReceiveController';
import { ListUsersController } from '../../controllers/user/ListUsersController';
import { ListUserSenderController } from '../../controllers/user/ListUserSenderController';
import ensureAdmin from '../../middlewares/ensureAdmin';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';
const router = Router();

const createUserController = new CreateUserController();
const listUserReceiveController = new ListUserReceiveController();
const listUserSenderController = new ListUserSenderController();
const listUsersController = new ListUsersController();

router.post('/', createUserController.handle);
router.get('/', ensureAuthenticated, ensureAdmin, listUsersController.handle);
router.get('/compliments/send', ensureAuthenticated, listUserReceiveController.handle);
router.get('/compliments/receive', ensureAuthenticated, listUserSenderController.handle)



export default router;