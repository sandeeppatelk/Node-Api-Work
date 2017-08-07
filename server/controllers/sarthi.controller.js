import Sarthi from '../models/sarthi';

/**
 * Get all Sarthis
 * @param req
 * @param res
 * @returns void
 */
export function getSarthis(req, res) {
  Sarthi.find((err, sarthis) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ sarthis });
  });
}

/**
 * Save a Sarthi
 * @param req
 * @param res
 * @returns void
 */
export function addSarthi(req, res) {

  if (!req.body.sarthi['first-name'] || !req.body.sarthi['last-name'] || !req.body.sarthi['start-date'] || !req.body.sarthi['phone']) {
    return res.status(403).end();
  }

  const newSarthi = new Sarthi(req.body.sarthi);

  newSarthi.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ sarthi: saved });
  });
}

/**
 * Edit Single Sarthi
 * @param req
 * @param res
 * @returns sarthi
 */

export function updateSarthi(req, res) {

  Sarthi.findOneAndUpdate({ _id: req.params.id }, req.body, {}).exec((err, sarthi = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ sarthi });
  });
}

/**
 * Get a single Sarthi
 * @param req
 * @param res
 * @returns void
 */
export function getSarthi(req, res) {
  Sarthi.findOne({ _id: req.params.id }).exec((err, sarthi = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ sarthi });
  });
}

/**
 * Delete a Sarthi
 * @param req
 * @param res
 * @returns void
 */
export function deleteSarthi(req, res) {
  Sarthi.findOne({ _id: req.params.id }).exec((err, sarthis) => {
    if (err) {
      return res.status(500).send(err);
    }

    sarthis.remove(() => {
      return res.status(200).end();
    });
  });
}
