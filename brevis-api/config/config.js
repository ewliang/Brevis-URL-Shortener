'use strict';
require('dotenv').config();

module.exports = {
    database: {
        connectionURL: process.env.databaseURL
    }
};
