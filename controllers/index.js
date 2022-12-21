const router = require('express').Router();

const apiRoutes = require('./api');

//fix const below when home-routes.js is fully updated
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
