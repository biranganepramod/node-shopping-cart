const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter first name'],
    }
});
const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;