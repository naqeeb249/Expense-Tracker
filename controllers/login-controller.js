const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

exports.getLogin = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','login.html'));
}