const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './.env' });

// Load models
const Trainer = require('./models/Trainer');
const User = require('./models/User');
const Video = require('./models/Video');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read JSON files
const trainers = [
  {
    name: 'John Doe',
    expertise: 'Fitness',
    experience: 5,
    image: 'https://images.unsplash.com/photo-1547944434-a82f3c3833c8',
  },
  {
    name: 'Jane Smith',
    expertise: 'Yoga',
    experience: 8,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
  },
];

const users = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    age: 30,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
];

// Import into DB
const importData = async () => {
  try {
    await Trainer.deleteMany();
    await User.deleteMany();
    await Video.deleteMany();

    const createdTrainers = await Trainer.create(trainers);
    await User.create(users);

    const videos = [
        {
            title: 'Full Body Workout',
            url: 'https://www.youtube.com/watch?v=9Lgfn6qA_Yc',
            trainer: createdTrainers[0]._id,
        },
        {
            title: 'Morning Yoga Flow',
            url: 'https://www.youtube.com/watch?v=4C-gxOE0j7s',
            trainer: createdTrainers[1]._id,
        },
    ];

    await Video.create(videos);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Trainer.deleteMany();
    await User.deleteMany();
    await Video.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} 