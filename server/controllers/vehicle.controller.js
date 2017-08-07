import Vehicle from '../models/vehicle';

/**
 * Get all Vehicles
 * @param req
 * @param res
 * @returns void
 */
export function getVehicles(req, res) {
  Vehicle.find((err, vehicles) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ vehicles });
  });
}

/**
 * Save a Vehicle
 * @param req
 * @param res
 * @returns void
 */
export function addVehicle(req, res) {
  if (!req.body.vehicle.name || !req.body.vehicle['start-date'] || !req.body.vehicle['date-added']) {
    return res.status(403).end();
  }

  const newVehicle = new Vehicle(req.body.vehicle);

  newVehicle.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ vehicle: saved });
  });
}

/**
 * Edit Single Vehicle
 * @param req
 * @param res
 * @returns Passenger
 */

export function updateVehicle(req, res) {

  Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, {}).exec((err, vehicle = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ vehicle });
  });
}

/**
 * Get a single Vehicle
 * @param req
 * @param res
 * @returns void
 */
export function getVehicle(req, res) {
  Vehicle.findOne({ _id: req.params.id }).exec((err, vehicle) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ vehicle });
  });
}

/**
 * Delete a Vehicle
 * @param req
 * @param res
 * @returns void
 */
export function deleteVehicle(req, res) {
  Vehicle.findOne({ _id: req.params.id }).exec((err, vehicles) => {
    if (err) {
      return res.status(500).send(err);
    }

    vehicles.remove(() => {
      return res.status(200).end();
    });
  });
}
