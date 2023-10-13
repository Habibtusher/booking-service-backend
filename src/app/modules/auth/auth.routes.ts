import express from 'express';
import { authController } from './auth.controller';

const router = express.Router();
router.post('/login',authController.login);
// router.post('/create-admin', validateRequest(userValidation.createUser), userController.insertIntoDB);
export const authRoute = router;
