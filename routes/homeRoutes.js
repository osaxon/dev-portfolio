const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll();
        const plainData = projectData.map((project) => project.get({ plain: true }));
        res.render('home', {
            plainData
        })
    } catch (err) {
        res.status(403).json(err)
    }
});

module.exports = router;