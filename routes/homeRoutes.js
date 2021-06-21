const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
    res.send('home')
});

module.exports = router;