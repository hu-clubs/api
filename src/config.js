let mongoDbUrl = process.env.mongodb || 'mongodb://localhost:32768/huclubs';
let frontEndUrl = process.env.frontEndUrl || 'http://localhost:3000';
let port = process.env.PORT || 8080;
let jwtSecret = process.env.JWT_SECRET || 'secret';
let jwtIssuer = process.env.JWT_ISSUER || 'hu-clubs';

module.exports = {
  mongoDbUrl,
  frontEndUrl,
  port,
  jwtSecret,
  jwtIssuer
};
