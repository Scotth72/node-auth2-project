const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const configRoutes = require('../config/routes');

server.use(helmet());
server.use(cors());
server.use(express.json());

configRoutes(server);

server.use('/api/users', auth, userRouter);
server.use('/api/', authRouter);

module.exports = server;
