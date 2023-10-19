import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
import { CategoryController } from './category.controller';
const router = express.Router();

router.post('/',validateRequest(CategoryValidation.create),CategoryController.insertIntoDB)
router.get('/',CategoryController.getAllFromDB)

export const CategoryRoutes = router;
