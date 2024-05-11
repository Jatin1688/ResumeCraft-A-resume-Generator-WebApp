const mongoose = require('mongoose')

// define schema
const Userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
 
    },
    lastname: {
        type: String,
        required: true,

    },

    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    }, 
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
    },
},
}, { timestamps: true })

const UserModal = mongoose.model('User', Userschema)

module.exports = UserModal