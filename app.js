const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
const signUpRoute = require('./routes/sign-up');
const path = require('path');
const rootDir = require('./util/path');

const sequelize = require('./util/database');
const User = require('./models/users');
const { dirname } = require('path');


app.use('/',signUpRoute);


app.use(express.static(path.join(__dirname ,'/public')));


sequelize.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));

