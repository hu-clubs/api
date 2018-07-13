const UserModel = require('../model');

function checkUserIsAuthorizedFromLocals () {
  return async function (req, res, next) {
    let resource = res.locals.auth.resource;
    let action = res.locals.auth.action;
    let user = res.locals.auth.user;
    user = await UserModel.findOne({'_id': user._id}).populate('roles');
    user.roles.forEach(role => {
      role.policies.forEach(policy => {
        policy.statements.forEach(statement => {
          // TODO make checking more robust
          if (statement.resource === resource && statement.action === action) {
            next();
          }
        });
      });
    });
    next({
      status: 401,
      error: {
        message: 'You are not authorized to perform that action',
        action: action,
        resource: resource
      }
    });
  };
}

function checkUserIsAuthorized (resource, action) {
  return async function (req, res, next) {
    let user = res.locals.auth.user;
    user = await UserModel.findOne({'_id': user._id}).populate('roles');
    user.roles.forEach(role => {
      role.policies.forEach(policy => {
        policy.statements.forEach(statement => {
          // TODO make checking more robust
          if (statement.resource === resource && statement.action === action) {
            next();
          }
        });
      });
    });
    next({
      status: 401,
      error: {
        message: 'You are not authorized to perform that action',
        action: action,
        resource: resource
      }
    });
  };
}

module.exports = {
  checkUserIsAuthorizedFromLocals,
  checkUserIsAuthorized
};
