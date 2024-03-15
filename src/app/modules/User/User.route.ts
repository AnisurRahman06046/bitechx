import { Router } from 'express';
import { userControllers } from './User.controller';
const router = Router();

router.post('/create', userControllers.createUser);
router.get('/all-users', userControllers.users);
router.get('/user/:id', userControllers.user);
router.patch('/user/:id', userControllers.updateUser);
router.delete('/user/:id', userControllers.deleteUser);
export const userRoutes = router;
