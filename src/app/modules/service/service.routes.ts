import express from 'express';
import { ServicesController } from './service.controller';
const router = express.Router();

router.post('/',ServicesController.insertIntoDB)
router.get('/',ServicesController.getAllFromDB)

export const ServiceRoutes = router;
