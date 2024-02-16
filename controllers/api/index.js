//dependencies
const router = require('express').Router();
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;