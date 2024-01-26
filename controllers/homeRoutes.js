const router = require('express').Router();
const { error } = require('console');
//const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
       /* const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });*/
        res.render('homepage')
    } catch(error) {
        res.status(500).json(error)
    };
});

module.exports =router;
