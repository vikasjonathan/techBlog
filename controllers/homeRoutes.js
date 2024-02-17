const router = require('express').Router();
const { error } = require('console');
const { BlogPost, Comments, User } = require('../models');
const withAuth = require('../utils/auth');

//get route for homepage
router.get('/', async (req, res) => {
    try {

        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get route for login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {

        res.render('profile');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
