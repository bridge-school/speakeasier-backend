const express = require('express');

const { getConferencesController, postConferenceController } = require("./conferences.controller");

const router = express.Router();

router.get("", getConferencesController);
router.post("", postConferenceController);

module.exports = {
  conferencesRouter: router
}
