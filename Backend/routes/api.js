

const express = require('express');
const router = express.Router();

// Import Mongoose models
const Trainer = require('../models/Trainer');
const User = require('../models/User');
const Video = require('../models/Video');

// Get all trainers
router.get('/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all videos with trainer info populated
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find().populate('trainer', ['name', 'expertise']);
    res.json(videos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new trainer
router.post('/trainers', async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    const trainer = await newTrainer.save();
    res.json(trainer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update an existing trainer
router.put('/trainers/:id', async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!trainer) return res.status(404).json({ msg: 'Trainer not found' });
    res.json(trainer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update an existing user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new video
router.post('/videos', async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    const video = await newVideo.save();
    res.json(video);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update an existing video
router.put('/videos/:id', async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!video) return res.status(404).json({ msg: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
