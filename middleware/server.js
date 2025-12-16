const express = require('express');
const app = express();

app.use(express.json());

const usersRouter = require('../routers/users.router');
const permissionsRouter = require('../routers/permissions.router');
const userPermissionsRouter = require('../routers/userPermissions.router');

app.use('/users', usersRouter);
app.use('/permissions', permissionsRouter);
app.use('/user-permissions', userPermissionsRouter);

module.exports = app;