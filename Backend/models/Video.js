const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'
    }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
