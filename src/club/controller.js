const ClubModel = require('./model');

async function addClub (req, res, next) {
  let club = new ClubModel({
    name: req.body.name,
    shortName: req.body.shortName,
    members: req.body.members
  });

  try {
    club = await club.save();
    res.json(club);
  } catch (err) {
    next({
      status: 500,
      error: err
    });
  }
}

async function getClubs (req, res, next) {
  try {
    let clubs = ClubModel.find();
    res.json(clubs);
  } catch (err) {
    next({
      status: 500,
      error: err
    });
  }
}

async function getClub (req, res, next) {
  res.json(res.locals.club);
}

async function updateClub (req, res, next) {
  try {
  } catch (err) {
    next({
      status: 500,
      error: err
    });
  }
}

async function deleteClub (req, res, next) {
  try {
  } catch (err) {
    next({
      status: 500,
      error: err
    });
  }
}

module.exports = {
  addClub,
  getClubs,
  getClub,
  updateClub,
  deleteClub
};
