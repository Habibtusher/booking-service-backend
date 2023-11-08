import express from 'express';
import { ServicesController } from './service.controller';
const router = express.Router();

router.post('/',ServicesController.insertIntoDB)
router.get('/',ServicesController.getAllFromDB)
router.get('/:id',ServicesController.singleService)
router.delete('/:id',ServicesController.deleteService)
router.patch('/:id',ServicesController.updateService)

export const ServiceRoutes = router;
