const router = require('express').Router();

const userRoutes = require('./manager-routes');

router.use('/users', userRoutes);

module.exports = router;
