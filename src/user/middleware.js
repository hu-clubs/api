const UserModel = require('./model');
const authorizationMiddleware = require('./authorization/middleware');

async function getUserFromParameter (req, res, next, userId) {
  try {
    let user = await UserModel.findOne({'_id': userId});
    if (user) {
      res.locals.user = user;
      next();
    } else {
      next({
        statusCode: 404,
        error: 'User not found'
      });
    }
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

async function authorizeAddUser (req, res, next) {
  if (!req.body.register) {
    authorizationMiddleware.checkUserIsAuthorized('user/*', 'create')(req, res, next);
  }
}

async function authorizeGetUsers (req, res, next) {
  authorizationMiddleware.checkUserIsAuthorized('user/*', 'list')(req, res, next);
}

async function authorizeGetUser (req, res, next) {
  // TODO allow if self or in their club
  authorizationMiddleware.checkUserIsAuthorized('user/*', 'view')(req, res, next);
}

async function authorizeUpdateUser (req, res, next) {
  // TODO allow if self
}

async function authorizeDeleteUser (req, res, next) {
  authorizationMiddleware.checkUserIsAuthorized('user/*', 'delete')(req, res, next);
}

async function authorizeAddRoleToUser (req, res, next) {
  // TODO
}

async function authorizeGetRolesForUser (req, res, next) {
  // TODO allow if self
}

module.exports = {
  getUserFromParameter,
  authorizeAddUser,
  authorizeGetUsers,
  authorizeGetUser,
  authorizeUpdateUser,
  authorizeDeleteUser,
  authorizeAddRoleToUser,
  authorizeGetRolesForUser
};
