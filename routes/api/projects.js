const express = require('express');
const router = express.Router();

// Load Project model
const Project = require('../../models/Projects');

// @route GET api/Projects/test
// @description tests Projects route
// @access Public
router.get('/test', (req, res) => res.send('Project route testing!'));

// @route GET api/Projects
// @description Get all Projects
// @access Public
router.get('/', (req, res) => {
  Project.find()
    .then(Projects => res.json(Projects))
    .catch(err => res.status(404).json({ noProjectsfound: 'No Projects found' }));
});

// @route GET api/Projects/:id
// @description Get single Project by id
// @access Public
router.get('/:id', (req, res) => {
  Project.findById(req.params.id)
    .then(Project => res.json(Project))
    .catch(err => res.status(404).json({ noProjectfound: 'No Project found' }));
});

// @route GET api/Projects
// @description add/save Project
// @access Public
router.post('/', (req, res) => {
  Project.create(req.body)
    .then(Project => res.json({ msg: 'Project added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Project' }));
});

// @route GET api/Projects/:id
// @description Update Project
// @access Public
router.put('/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(Project => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Projects/:id
// @description Delete Project by id
// @access Public
router.delete('/:id', (req, res) => {
  Project.findByIdAndRemove(req.params.id, req.body)
    .then(Project => res.json({ mgs: 'Project entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Project' }));
});

module.exports = router;