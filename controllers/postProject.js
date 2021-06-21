const Project = require('../models/Project');

const postProject = async(req, res) => {
    try {
        const projectData = await Project.create({
            title: req.body.title,
            description: req.body.description,
            img_url: req.body.img_url,
        });
        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err)
    }
};

module.exports = postProject;