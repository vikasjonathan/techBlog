//dependencies
const router = require('express').Router();
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;