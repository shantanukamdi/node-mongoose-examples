const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    bio: String,
    twitter: String,
    facebook: String,
    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;