const express = require('express');
const controller = require('./controller');
const middleware = require('./middleware');
const router = express.Router();

router.param('clubId', middleware.getClubFromParameter);

router.post('/', controller.addClub);

router.get('/', controller.getClubs);

router.get('/:clubId', controller.getClub);

router.patch('/:clubId', controller.updateClub);

router.delete('/:clubId', controller.deleteClub);

module.exports = router;
