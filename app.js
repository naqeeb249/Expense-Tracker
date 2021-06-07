const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
const signUpRoute = require('./routes/sign-up');
const loginROute  = require('./routes/login');
const path = require('path');
const rootDir = require('./util/path');
require('dotenv').config();

const sequelize = require('./util/database');
const User = require('./models/users');
const { dirname } = require('path');


app.use('/',loginROute);
app.use('/',signUpRoute);



app.use(express.static(path.join(__dirname ,'/public')));


sequelize.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));



