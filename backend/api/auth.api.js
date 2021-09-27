const express = require('express');
const {authHome} = require("../service/auth.service");

const router = express.Router();

router.get('/login', authHome);

module.exports = router;
