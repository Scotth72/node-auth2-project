const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');
const { isValid } = require('./user-services');

router.use(restricted);

router.get('/', (req, res) => {
	User.find()
		.then((users) => {
			res.status(200).json({ users, jwt: req.jwt });
		})
		.catch((error) => res.send(error));
});

module.exports = router;
