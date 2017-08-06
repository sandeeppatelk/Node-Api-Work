import { Router } from 'express';
import * as PassengerController from '../controllers/passenger.controller';
const router = new Router();

router.route('/passengers').get(PassengerController.getPassengers);

// Get one Passenger by id
router.route('/passengers/:id').get(PassengerController.getPassenger);

// Get Passengers by sarthi id
router.route('/passengers/sarthi/:id').post(PassengerController.getPassengerList);

// Update Passenger
router.route('/passengers/:id').put(PassengerController.editPassenger);

// Add a new Passenger
router.route('/passengers').post(PassengerController.addPassenger);

// Delete a Passenger by id
router.route('/passengers/:id').delete(PassengerController.deletePassenger);

export default router;
