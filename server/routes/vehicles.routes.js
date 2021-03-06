import { Router } from 'express';
import * as VehicleController from '../controllers/vehicle.controller';
const router = new Router();

// Get all vehicles
router.route('/vehicles').get(VehicleController.getVehicles);

// Get one Vehicle by id
router.route('/vehicles/:id').get(VehicleController.getVehicle);

// Add a new Vehicle
router.route('/vehicles').post(VehicleController.addVehicle);

// Delete a Vehicle by id
router.route('/vehicles/:id').delete(VehicleController.deleteVehicle);

export default router;
