import { Router } from 'express';
import * as PassengerController from '../controllers/passenger.controller';
const router = new Router();

router.route('/passengers').get(PassengerController.getPassengers);

// Get one Passenger by id
router.route('/passengers/:id').get(PassengerController.getPassenger);

// Add a new Passenger
router.route('/passengers').post(PassengerController.addPassenger);

// Delete a Passenger by id
router.route('/passengers/:id').delete(PassengerController.deletePassenger);

export default router;
