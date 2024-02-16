const router = require('express').Router();
const { Comments } = require('../../models');

//post route to create a comment
router.post('/', async (req, res) => {
    try {
      const commentData = await Comments.create({
        content: req.body.content,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;