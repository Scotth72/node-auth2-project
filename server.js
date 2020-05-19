const express = require('express');

const server = express();

server.use(express.json());

server.use('/api/users', auth, userRouter);
server.use('/api/', authRouter);

module.exports = server;
