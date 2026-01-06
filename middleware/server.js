const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRouter = require('../routers/users.router');
const permsRouter = require('../routers/permissions.router');
const upRouter = require('../routers/userPermissions.router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/users', usersRouter);
app.use('/permissions', permsRouter);
app.use('/user-permissions', upRouter);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});