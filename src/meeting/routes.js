const express = require('express');
const controller = require('./controller');
const middleware = require('./middleware');
const clubMiddleware = require('../club/middleware');
const router = express.Router();

router.param('meetingId', middleware.getMeetingFromParameter);

router.post('/', controller.addMeeting);
router.get('/', controller.getMeetings);
router.get('/:meetingId', controller.getMeeting);
router.patch('/:meetingId', controller.updateMeeting);
router.delete('/:meetingId', controller.deleteMeeting);

router.param('clubId', clubMiddleware.getClubFromParameter);

// Get meetings for one club
router.get('/:clubId');

// Add a member to a meeting
router.post('/:meetingId/:userId');

module.exports = router;
