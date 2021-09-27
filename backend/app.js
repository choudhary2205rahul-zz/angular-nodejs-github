const dotenv = require("debug");
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const { auth } = require('express-openid-connect');

// ROUTES
const homeRoutes = require('./api/home.api');
const authRoutes = require('./api/auth.api');

dotenv.load();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
})

// Forward Request to Routes that we have
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);


module.exports = app;
