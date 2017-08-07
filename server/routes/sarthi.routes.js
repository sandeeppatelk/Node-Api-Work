import { Router } from 'express';
import * as SarthiController from '../controllers/sarthi.controller';
const router = new Router();

// Get all sarthis
router.route('/sarthis').get(SarthiController.getSarthis);

// Get one Sarthi by id
router.route('/sarthis/:id').get(SarthiController.getSarthi);

// Add a new Sarthi
router.route('/sarthis').post(SarthiController.addSarthi);

// update Sarthi
router.route('/sarthis/:id').put(SarthiController.updateSarthi);

// Delete a Sarthi by id
router.route('/sarthis/:id').delete(SarthiController.deleteSarthi);

export default router;
