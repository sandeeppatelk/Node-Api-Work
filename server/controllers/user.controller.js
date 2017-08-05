import User from '../models/user';

/**
 * Get all Users
 * @param req
 * @param res
 * @returns users
 */
export function getUsers(req, res) {
  console.log("Here in get User");
  console.log(JSON.stringify(req.body));
  User.find((err, users) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ users });
  });
}

/**
 * Save a User
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body['first-name'] || !req.body['last-name'] || !req.body['user-name'] || !req.body['password'] || !req.body['phone']) {
    return res.status(403).end();
  }

  const newUser = new User(req.body);

  newUser.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ User: saved });
  });
}

/**
 * Get a single User
 * @param req
 * @param res
 * @returns user
 */
export function getUser(req, res) {
  User.findOne({ _id: req.params.id }).exec((err, User = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ User });
  });
}

/**
 * Get User login
 * @param req
 * @param res
 * @returns user
*/
export function loginUser(req, res) {
  var query = {
      'user-name' : req.body['user-name'],
      'password' : req.body.password,
      'verified' : true
  }; 
  User.findOne(query).exec((err, User = []) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.jsonp({ User });
  });
}
 

/**
 * Edit Single User
 * @param req
 * @param res
 * @returns user
 */

export function editUser(req, res) {
  var options = {};

  User.findOneAndUpdate({ _id: req.params.id }, req.body, options).exec((err, User = []) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.jsonp({ User });
  });
}

/**
 * Delete a User
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
  User.findOne({ _id: req.params.id }).exec((err, Users) => {
    if (err) {
      return res.status(500).send(err);
    }

    Users.remove(() => {
      return res.status(200).end();
    });
  });
}
