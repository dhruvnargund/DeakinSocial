const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({

    firstName: {

        type: String,

        lowercase: true,

        required: true,

        match: [/^[a-zA-Z0-9]+$/, 'is invalid']

    },

    lastName: {

        type: String,

        lowercase: true,

        required: [true, "can't be blank"],

        match: [/^[a-zA-Z0-9]+$/, 'is invalid']

    },

    username: {

        type: String,

        lowercase: true,

        required: [true, "can't be blank"],

        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],

        index: true,

        unique: true

    },

    password: {

        type: String,

        required: [true, "can't be blank"]

    },

    email: {

        type: String,

        lowercase: true,

        required: [true, "can't be blank"],

        match: [/\S+@\S+\.\S+/, 'is invalid'], 

        index: true,

        unique: true

    },

    campus: {

        type: String,

        lowercase: true,

        required: false

    },

    bio: {

        type: String,

        required: false

    }

}, {timeStamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User