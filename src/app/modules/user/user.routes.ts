import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();
router.post('/create', validateRequest(userValidation.createUser), userController.insertIntoDB);
router.get('/',userController.getAllFromDB)
router.get('/:email',userController.getSingleUser)
router.patch('/:email',userController.uploadUserPhoto)
router.patch('/update-profile/:email',userController.updateProfile)
// router.post('/create-admin', validateRequest(userValidation.createUser), userController.insertIntoDB);
export const userRoute = router;
