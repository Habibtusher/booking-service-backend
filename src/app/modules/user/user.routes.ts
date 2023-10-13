import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();
router.post('/create', validateRequest(userValidation.createUser), userController.insertIntoDB);
// router.post('/create-admin', validateRequest(userValidation.createUser), userController.insertIntoDB);
export const userRoute = router;
