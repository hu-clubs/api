const express = require('express');
const UserModel = require('./model');

async function getUsers (req, res, next) {
  let users = await UserModel.find();
  res.json(users);
}

async function addUser (req, res, next) {
  // TODO hash password
  let user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hNumber: req.body.hNumber,
    password: req.body.password
  });

  user = await user.save();
  res.send(user);
}

module.exports = {
  getUsers,
  addUser
}
