const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

//route to postdata
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.create({

            user_id: req.session.user_id,
            title: req.body.title,
            content: req.body.content
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete route to delete post of user with id and session login valid
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//put route to update blog post by id
router.put('/:id', async (req, res) => {
    try {
        const postData = await BlogPost.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
