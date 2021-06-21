const router = require('express').Router();
const postProject = require('../../controllers/postProject');

router.post('/', postProject);

module.exports = router;