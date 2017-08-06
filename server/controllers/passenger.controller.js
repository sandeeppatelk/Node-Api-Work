import Passenger from '../models/passenger';


/**
 * Get all Passengers
 * @param req
 * @param res
 * @returns void
 */

export function getPassengers(req, res) {
  Passenger.find((err, passengers) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ passengers });
  });
}


/**
 * Save a Passenger
 * @param req
 * @param res
 * @returns void
 */
export function addPassenger(req, res) {
  if (!req.body.passenger['first-name']
     || !req.body.passenger['last-name']
     || !req.body.passenger['phone']
     || !req.body.passenger['gender']

    ) {
    return res.status(403).end();
  }

  const newPassenger = new Passenger(req.body.passenger);

  newPassenger.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ passenger: saved });
  });
}

/**
 * Edit Single Passenger
 * @param req
 * @param res
 * @returns Passenger
 */

export function editPassenger(req, res) {

  Passenger.findOneAndUpdate({ _id: req.params.id }, req.body, {}).exec((err, passenger = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ passenger });
  });
}

/**
 * Get a single Passenger
 * @param req
 * @param res
 * @returns void
 */
export function getPassenger(req, res) {
  Passenger.findOne({ _id: req.params.id }).exec((err, passenger = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ passenger });
  });
}

/**
 * Delete a Passenger
 * @param req
 * @param res
 * @returns void
 */
export function deletePassenger(req, res) {
  Passenger.findOne({ _id: req.params.id }).exec((err, passengers) => {
    if (err) {
      return res.status(500).send(err);
    }

    passengers.remove(() => {
      return res.status(200).end();
    });
  });
}

