const express = require('express');
const router = express.Router();

// Import models
const Trainer = require('../models/Trainer');
const User = require('../models/User');
const Video = require('../models/Video');

// @route   GET api/trainers
// @desc    Get all trainers
// @access  Public
router.get('/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/videos
// @desc    Get all videos
// @access  Public
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find().populate('trainer', ['name', 'expertise']);
    res.json(videos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
