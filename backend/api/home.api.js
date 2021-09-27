const express = require('express');
const {home} = require("../service/home.service");
const router = express.Router();

router.get('',home);

module.exports = router;
